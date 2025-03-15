// /src/components/Blog/BlogCTA.jsx

import Link from "next/link";

const BlogCTA = () => {
    return (
        <section className="bg-green-50 border border-green-200 rounded-lg p-8 text-center mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                Want to take full control of your health?
            </h3>
            <p className="text-gray-700 mb-6">
                Download our ingredient scanning app today and get personalized insights.
            </p>
            <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-700">
                Download App
            </button>
        </section>
    );
}

export default BlogCTA;