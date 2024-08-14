import RSS from 'rss';
import { getPosts } from '@/lib/posts';

export async function GET() {
  const root = process.env.NODE_ENV === 'production' 
    ? 'https://yourwebsite.com' // change with your website
    : 'http://localhost:3000';

  const feed = new RSS({
    title: '[Your website]’s Blog',
    description: '[A description of your website feed.]',
    site_url: `${root}`,
    feed_url: `${root}/blog`,
    copyright: `${new Date().getFullYear()} — [Your website]`,
    language: 'en',
    pubDate: new Date(),
  });

  const posts = await getPosts();

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      guid: `${root}/blog/${post.slug}`,
      url: `${root}/blog/${post.slug}`,
      date: new Date(post.publishDate),
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}