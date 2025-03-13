import Link from "next/link";
import Image from "next/image";
import { formatDateForSEO } from "@/utils/dates";

const BlogCardFeaturedImage = ({ title, slug }) => {
    const imagePath = `/blogs/${slug}.jpg`;
    return (
        <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
            {imagePath ? (
                <Image
                    src={imagePath}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <span>No Image</span>
                </div>
            )}
        </div>
    );
};

const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const BlogCard = ({ post }) => {
    const { title, slug, category, date, excerpt, readTime } = post;

    return (
        <Link href={`/blog/${post.slug}`} className="group">
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <BlogCardFeaturedImage title={title} slug={slug} />

                <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-green-600">{category}</span>
                        <span className="text-xs text-gray-500">{formatDateForSEO(date)}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {truncateText(title, 50)}
                    </h2>
                    <span className="text-gray-600 mb-4 line-clamp-3">
                        {truncateText(excerpt, 120)}
                    </span>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{readTime}</span>
                        <span className="text-sm font-medium text-green-600">
                            Read more
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
