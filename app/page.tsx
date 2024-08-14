import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js RSS Feed',
}

export default function Home() {
  return (
    <main style={{ 
      maxWidth: '40em',
      height: '100svh',
      margin: '0 auto',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <h1>Next.js RSS Feed</h1>
      <p style={{ color: 'rgb(100 100 100)', marginBottom: '2em', }}>Starter pack for creating an RSS feed. Also contains minimal configuration for routing mdx posts — additional configuration will be needed to make MDX functional.</p>
      <div style={{ display: 'flex', gap: '2em', }}>
        <Link 
          href={'/rss.xml'} 
          style={{ 
            color: 'inherit', 
            textDecorationColor: 'rgb(100 100 100)',
            textDecorationThickness: '.0625rem',
            textUnderlineOffset: '.125rem'
          }}
        >RSS feed</Link>
        <Link 
          href={'/sitemap.xml'} 
          style={{ 
            color: 'inherit', 
            textDecorationColor: 'rgb(100 100 100)',
            textDecorationThickness: '.0625rem',
            textUnderlineOffset: '.125rem'
          }}
        >Sitemap</Link>
      </div>
    </main>
  );
}
