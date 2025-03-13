// /src/components/Blog/BlogAuthor.jsx
import NamedAvatar from "@/components/NamedAvatar";

const BlogAuthor = ({ author }) => {
    return (
        <section className="flex items-center mb-8">
            <NamedAvatar fullName={author.name} size="w-12 h-12" />
            <div className="ml-4">
                <div className="font-medium text-gray-900">{author.name}</div>
                <div className="text-sm text-gray-500">{author.role}</div>
            </div>
        </section>
    );
};

export default BlogAuthor;
