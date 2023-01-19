import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Html>
    <Head>
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto&display=optional'
        rel='stylesheet'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
