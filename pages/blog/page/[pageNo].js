import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { sortByDate } from '../../../utils/sortByDate'
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"

function Index({ posts, page }) {
  const router = useRouter()
  const content = posts.slice(7 * (page - 1), 7 * page)

  const handleClick = (slug) => {
    router.push(`/blog/${slug}`)
  }

  const renderNextButton = () => {
    const button = (
      <button
        onClick={nextClick}
        className="mt-12 bg-cyan-200 text-center hover:bg-cyan-400 font-medium rounded py-2 px-8"
      >
        {' '}
        Next{' '}
      </button>
    )
    if (posts.length % 7 === 0) {
      if (page < posts.length / 7) {
        return button
      }
    }
    if (page < Math.abs(posts.length / 7)) {
      return button
    } else return null
  }

  const nextClick = () => {
    router.push(`/blog/page/${parseInt(page) + 1}`)
  }
  const prevClick = () => {
    router.push(`/blog/page/${parseInt(page) - 1}`)
  }
  return (
    <div>
      <Head>
        <title>BabyNama - Blogs</title>
        <link rel="icon" href="images/ff.webp" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="images/ff.webp" />
      </Head>
      <Navbar />
      <div className="bg-cyan-50 pb-12 pt-52 w-[100%]">
        <div id="card" className="flex flex-col items-center">
          <h2 className="text-center mb-8 uppercase text-4xl xl:text-5xl">
            Recent Articles
          </h2>

          <div className="sm:container w-full lg:w-5/6 xl:w-4/6 mx-auto flex flex-col">
            {content.map(
              ({ slug, frontmatter: { title, date, excerpt, cover_image } }) => {
                return (
                  <div
                    key={slug}
                    className="flex flex-col mb-4 cursor-pointer md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
                    onClick={() => handleClick(slug)}
                  >
                    <div className="md:h-auto h-64 w-full md:w-2/6 relative">
                      <Image
                        src={cover_image}
                        layout="fill"
                        priority
                      />
                    </div>
                    <div className="w-full md:w-4/6 py-4 px-6 text-gray-800 flex flex-col ">
                      <h3 className="font-semibold text-2xl mb-4 leading-tight truncate">
                        {title}
                      </h3>
                      <p className="mb-8 text-sm text-gray-700 uppercase tracking-wide font-semibold">
                        Neha &bull; {date}
                      </p>
                      <p className="mb-8">{excerpt}</p>
                    </div>
                  </div>
                )
              },
            )}
          </div>
          <div className="flex">
            {page == 1 ? null : (
              <button
                onClick={prevClick}
                className="mt-12 mr-4 bg-cyan-200 text-center hover:bg-cyan-400 font-medium rounded py-2 px-8"
              >
                {' '}
                Previous{' '}
              </button>
            )}
            {renderNextButton()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Index

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  var length = files.length;
  var pages = Math.ceil(length/7);
  const paths = Array.from({ length: pages }, (_, i) => ({
    params: { pageNo: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { pageNo } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    var slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate),
      page: pageNo,
    },
  }
}
