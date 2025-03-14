import { MetadataRoute } from 'next';
import { baseUrl } from '@/constants/categories';
import { getAllPostSlugs } from '@/utils/blogs';

const sitemap = async () => {

    // Static pages
    const staticPages = [
        '', // Home
        'blog',
        'privacy-policy',
        'terms-and-conditions'
    ].map((path) => ({
        url: `${baseUrl}/${path}`,
        lastModified: new Date().toISOString(),
    }));

    // Fetch blog post slugs dynamically
    const blogSlugs = getAllPostSlugs();

    console.log('blogSlugs');
    console.log(blogSlugs);

    const blogPages = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`, // This will now be correct
        lastModified: new Date().toISOString(),
    }));
    
    console.log('blogPages');
    console.log(blogPages);
    console.log('staticPages');
    console.log(staticPages);
    console.log('combined');
    console.log([...staticPages, ...blogPages]);

    return [...staticPages, ...blogPages];
}

export default sitemap; 
