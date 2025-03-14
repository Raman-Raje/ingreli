import { MetadataRoute } from 'next';
import { baseUrl } from '@/constants/categories';
import { getAllPostSlugs } from '@/utils/blogs';

const sitemap = async () => {

    // Static pages
    const staticPages = [
        '', // Home
        'blogs',
        'privacy-policy',
        'terms-and-conditions'
    ].map((path) => ({
        url: `${baseUrl}/${path}`,
        lastModified: new Date().toISOString(),
    }));

    // Fetch blog post slugs dynamically
    const blogSlugs = getAllPostSlugs();

    const blogPages = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blogs/${slug}`, // This will now be correct
        lastModified: new Date().toISOString(),
    }));

    return [...staticPages, ...blogPages];
}

export default sitemap; 
