// /src/components/Blog/BlogAuthor.jsx
import NamedAvatar from "@/components/NamedAvatar";
import { contentWriters } from "@/constants/categories";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const BlogAuthor = ({ authorId }) => {

    const { name, role } = contentWriters[authorId];

    return (
        <section className="flex items-center mb-8">
            <NamedAvatar fullName={name} size="w-12 h-12" />
            <div className="ml-4">
                <div className="font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{role}</div>
            </div>
        </section>
    );
};

export default BlogAuthor;
