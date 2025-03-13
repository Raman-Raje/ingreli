// /src/components/Blog/BlogContent.jsx
import MarkdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs'; // For adding CSS classes

const md = new MarkdownIt();
md.use(markdownItAttrs);

const BlogContent = ({ content }) => {
    const sanitizedContent = md.render(content)

    return (
        <article
            className="prose prose-green lg:prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
    );
}

export default BlogContent;
