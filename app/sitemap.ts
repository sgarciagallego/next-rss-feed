import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const root = process.env.NODE_ENV === 'production' 
    ? 'https://yourwebsite.com' // change with your website
    : 'http://localhost:3000';

  const routes = ['/', '/about', '/services', '/contact'].map((route) => ({
    url: `${root}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const posts = await getPosts();

  posts.forEach(post => {
    routes.push({
      url: `${root}/blog/${post.slug}`,
      lastModified: new Date(post.publishDate).toISOString().split('T')[0],
    })
  })

  return routes;
}