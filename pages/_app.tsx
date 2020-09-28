import '../scss/global.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Strata Roofing</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        {/* <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
