// /src/components/Blog/BackToHomeButton.jsx

import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

const BackToHomeButton = () => {
    return (
        <div className="back-to-container">
            <Link
                href="/"
            className="inline-flex items-center mb-6 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
        >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
            </Link>
        </div>
    );
}
export default BackToHomeButton;