// /src/components/Blog/BlogGrid.jsx

import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs }) => {
    console.log(blogs);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
            ))}
        </div>
    );
}

export default BlogGrid;