import { notFound } from "next/navigation";
import BackToArticlesButton from "@/components/Blog/BackToArticlesButton";
import BlogHeader from "@/components/Blog/BlogHeader";
import BlogAuthor from "@/components/Blog/BlogAuthor";
import BlogFeaturedImage from "@/components/Blog/BlogFeaturedImage";
import BlogContent from "@/components/Blog/BlogContent";
import BlogCTA from "@/components/Blog/BlogCTA";
import { getBlogPost, getAllPostSlugs } from "@/utils/blogs";

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const post = await getBlogPost(params.slug);

    if (!post) {
        return {
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.'
        };
    }

    return {
        title: `${post.title} | Health Insights`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }) {
    
    const slug = params.slug;
    const post = await getBlogPost(slug);


    if (!post) notFound();

    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <BackToArticlesButton />
            <BlogHeader post={post} />
            <BlogAuthor author={post.author} />
            <BlogFeaturedImage title={post.title} slug={slug} />
            <BlogContent content={post.content} />
            <BlogCTA />
        </main>
    );
}

export async function generateStaticParams() {
    // Fetch all available slugs (Ensure `getAllPostSlugs()` returns an array of strings)
    return getAllPostSlugs().map((slug) => ({
        slug: String(slug), // Ensure it's a string
    }));
}