import Head from 'next/head';
export default function SEO({ title, description, image, url, keywords }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXX';
  const GSC = process.env.NEXT_PUBLIC_GSC || 'YOUR_VERIFICATION_CODE';
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
      <meta property="og:url" content={url}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <link rel="icon" href="/logo.svg"/>
      <meta name="google-site-verification" content={GSC} />
      {/* Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `
      }} />
    </Head>
  );
}
