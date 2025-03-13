"use client"

import React, { useState } from 'react'
import CategoryFilter from './CategoryFilter';
import BlogGrid from './BlogGrid';
import NoResultsMessage from './NoResultsMessage';

const BlogCategoryFilter = ({ allPosts }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {filteredPosts.length > 0 ? (
        <BlogGrid blogs={filteredPosts} />
      ) : (
        <NoResultsMessage />
      )}
    </div>
  )
}

export default BlogCategoryFilter