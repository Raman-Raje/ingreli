// /src/utils/blog.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'content');

export const getAllPostSlugs = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        };
    });
}

export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...matterResult.data,
            excerpt: matterResult.data.excerpt || ''
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const getBlogPost = async (slug) => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    // ✅ Read file asynchronously
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // ✅ Parse Markdown front matter
    const { content, data } = matter(fileContents);

    return {
      slug,
      content,
      ...data
    };
  } catch (error) {
    console.error(`Error getting blog post with slug: ${slug}`, error);
    return null;
  }
};
