// /src/app/blog/page.js

import Head from "next/head";
import BlogHeader from "@/components/Blogs/BlogHeader";
import BackToHomeButton from "@/components/Blogs/BackToHomeButton";
import BlogCategoryFilter from "@/components/Blogs/BlogCategoryFilter";
import { getAllPosts } from "@/utils/blogs";


const BlogsPage = () => {
  const allPosts = getAllPosts();
  return (
    <>
      <Head>
        <title>Ingredient Insights: Your Guide to Smarter Eating with Ingreli</title>
        <meta
          name="description"
          content="Discover expert tips on ingredient scanning, personalized nutrition, and health insights to make informed food choices. Stay ahead with the latest from Ingreli."
        />
      </Head>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <BackToHomeButton /> {/* 👈 Added here */}
        <BlogHeader />
        <BlogCategoryFilter allPosts={allPosts} />
      </main>
    </>
  );
}
export default BlogsPage;

