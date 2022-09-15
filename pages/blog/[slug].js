import React from 'react'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { marked } from 'marked'
import { FaArrowLeft } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'
function Post({
  frontmatter: { title, date, excerpt, cover_image },
  slug,
  content,
}) {
  const router = useRouter()
  return (
    <div className="bg-sky-50">
       <Head>
        <title>BabyNama - Blogs</title>
        <link rel="icon" href="images/ff.webp" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="images/ff.webp" />
      </Head>
      <Navbar />
      <div className="container pb-20">
        <div className="pt-24 flex flex-col items-center">
          <div className="mb-8  sm:w-[60%] w-[85%] container ">
            <span onClick={() => router.back()}>
              <a className="self-start text-slate-700 hover:text-black">
                {' '}
                <FaArrowLeft
                  style={{ display: 'inline', margin: '0.3rem' }}
                />{' '}
                Back
              </a>
            </span>
          </div>
          <Image
            src={cover_image}
            width={780}
            height={450}
          />
          <div
            className="mt-12 max-w-none prose items-center md:w-[85%] lg:w-[60%] w-[95%]"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Post

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false, // if page doesn't exist it will give 404 page
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8',
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
