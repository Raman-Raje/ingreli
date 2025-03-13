// /src/components/Blog/CategoryFilter.jsx
import { blogCategories } from "@/constants/categories";

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
            {blogCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;