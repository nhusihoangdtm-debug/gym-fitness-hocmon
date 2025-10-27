import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        {/* GOOGLE ANALYTICS */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FJQLMYD1QG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FJQLMYD1QG', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
