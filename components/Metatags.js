import Head from 'next/head';

export default function Metatags({
  title = 'A sample blogging application.',
  siteName = 'Blog App',
  description = 'Built with NEXT.js and Firebase.',
  image = 'https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png?20110515154115',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property='og:site_name' content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
