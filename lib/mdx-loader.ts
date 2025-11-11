import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './blog-data';

const contentDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Load all MDX blog posts from the content/blog directory
 */
export function loadMDXPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    console.warn(`Blog content directory not found: ${contentDirectory}`);
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const mdxFiles = files.filter(file => file.endsWith('.mdx') || file.endsWith('.md'));

  const posts = mdxFiles.map(filename => {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Generate slug from filename if not provided in frontmatter
    const slug = data.slug || filename.replace(/\.mdx?$/, '');

    // Calculate reading time if not provided
    const readingTime = data.readingTime || calculateReadingTime(content);

    // Construct BlogPost object
    const post: BlogPost = {
      slug,
      title: data.title || 'Untitled',
      author: data.author || 'Ravana Team',
      date: data.date || new Date().toISOString().split('T')[0],
      coverImage: data.coverImage || '/images/blog/default-cover.jpg',
      category: data.category || 'Uncategorized',
      excerpt: data.excerpt || '',
      featured: data.featured || false,
      readingTime,
      tags: data.tags || [],
      content,
    };

    return post;
  });

  return posts;
}

/**
 * Load a single MDX post by slug
 */
export function loadMDXPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const altFilePath = path.join(contentDirectory, `${slug}.md`);

  let fullPath: string;
  if (fs.existsSync(filePath)) {
    fullPath = filePath;
  } else if (fs.existsSync(altFilePath)) {
    fullPath = altFilePath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const readingTime = data.readingTime || calculateReadingTime(content);

  return {
    slug: data.slug || slug,
    title: data.title || 'Untitled',
    author: data.author || 'Ravana Team',
    date: data.date || new Date().toISOString().split('T')[0],
    coverImage: data.coverImage || '/images/blog/default-cover.jpg',
    category: data.category || 'Uncategorized',
    excerpt: data.excerpt || '',
    featured: data.featured || false,
    readingTime,
    tags: data.tags || [],
    content,
  };
}
