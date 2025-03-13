// /src/components/Blog/BlogHeader.jsx
import Image from "next/image";
import { formatDateForSEO } from "@/utils/dates";

const BlogHeader = ({ post }) => {
    return (
        <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {post.category}
                </span>
                <span className="text-gray-500 text-sm">{formatDateForSEO(post.date)} • {post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
        </header>
    );
}

export default BlogHeader;