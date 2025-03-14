import { notFound } from "next/navigation";
import BackToArticlesButton from "@/components/Blog/BackToArticlesButton";
import BlogHeader from "@/components/Blog/BlogHeader";
import BlogAuthor from "@/components/Blog/BlogAuthor";
import BlogFeaturedImage from "@/components/Blog/BlogFeaturedImage";
import BlogContent from "@/components/Blog/BlogContent";
import BlogCTA from "@/components/Blog/BlogCTA";
import { getBlogPost, getAllPostSlugs } from "@/utils/blogs";

// Generate metadata for SEO
export const generateMetadata = async ({ params }) => {

    const { slug } = await params;
    const post = await getBlogPost(slug);

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

export const BlogPostPage = async ({ params }) => {
    
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) notFound();

    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            <BackToArticlesButton />
            <BlogHeader post={post} />
            <BlogAuthor authorId={post.authorId} />
            <BlogFeaturedImage title={post.title} slug={slug} />
            <BlogContent content={post.content} />
            <BlogCTA />
        </main>
    );
}

export const generateStaticParams = async () => {
    return getAllPostSlugs().map((slug) => ({
        slug, // Correct format expected by Next.js
    }));
}
