import type { NextPage } from "next";
import fs from "fs";
import About from "../components/About";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import HIW from "../components/HIW";
import Navbar from "../components/Navbar";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import Slide from "../components/Slide";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import OurTeam from "../components/OurTeam";

const Home = (props: {
  posts: [
    {
      slug: string;
      frontMatter: {
        title: string;
        date: string;
        cover_image: string;
      };
    }
  ];
}) => {
  const content = props.posts.filter((item, index) => {
    return index < 5;
  });

  return (
    <div>
      <Head>
        <title>BabyNama</title>
        <link rel="icon" href="images/ff.webp" type="image/x-icon" />
        <link rel="shortcut icon" type="image/x-icon" href="images/ff.webp" />
      </Head>
      <Navbar />
      <HeroComponent />
      {/* <h1 className="mt-12 text-5xl font-semibold text-center text-[#020288]">
        Our Tools
      </h1>
      <div className="flex">
        <ToolsProfile
          link="/tools/growth-calculator"
          title="Growth Calculator"
          img="/images/growthCal/BnG.webp"
        />
        <ToolsProfile
          link="/tools/development-checker"
          title="Development Checker"
          img="/images/growthCal/dev.jpg"
        />
      </div> */}
      <About />
      <HIW />
      <OurServices />
      <Testimonials />
      <OurTeam />
      {/* <div
        id="blog"
        className="py-12 flex bg-[#f5f6fe] flex-col justify-center items-center"
      >
        <h1 className="sm:text-5xl text-4xl mb-12 font-semibold text-[#1f2278]">
          Our Latest News
        </h1>

        <div className="sm:p-4 flex flex-wrap justify-center">
          {content.map(
            ({ slug, frontMatter: { title, date, cover_image } }) => (
              <BlogComponent
                key={slug}
                Heading={title}
                Img={cover_image}
                date={date}
                slug={slug}
              />
            )
          )}
        </div>
      </div> */}
      <Footer />
    </div>
  );
};
export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  const posts = files
    .filter((filename) => filename.includes(".md"))
    .map((filename) => {
      // Create slug
      const slug = filename.replace(".md", "");

      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        slug,
        frontMatter,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    );

  return {
    props: {
      posts,
    },
  };
}

export default Home;
