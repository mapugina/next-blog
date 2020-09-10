import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&family=Fira+Code&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-tomorrow.min.css"
            integrity="sha512-vswe+cgvic/XBoF1OcM/TeJ2FW0OofqAVdCZiEYkd6dwGXthvkSFWOoGGJgS2CW70VK5dQM5Oh+7ne47s74VTg=="
            crossOrigin="anonymous"
          />
        </Head>
        <body className="vscode">
          <Main />
          <NextScript />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js"
            integrity="sha512-hqRrGU7ys5tkcqxx5FIZTBb7PkO2o3mU6U5+qB9b55kgMlBUT4J2wPwQfMCxeJW1fC8pBxuatxoH//z0FInhrA=="
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"
            integrity="sha512-ROhjG07IRaPZsryG77+MVyx3ZT5q3sGEGENoGItwc9xgvx+dl+s3D8Ob1zPdbl/iKklMKp7uFemLJFDRw0bvig=="
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
