// /src/components/Blog/BackToArticlesButton.jsx

import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

const BackToArticlesButton = () => {
    return (
        <div className="back-to-container">
            <Link
                href="/blog"
                className="inline-flex items-center mb-8 text-sm font-medium text-gray-600 hover:text-green-600"
        >
                <ArrowLeft className="h-5 w-5 mr-2" /> Back to Articles
            </Link>
        </div>
    );
}

export default BackToArticlesButton;