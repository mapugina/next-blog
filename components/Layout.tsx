import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className="layout">
        <div className="content">{children}</div>
      </main>
      <footer>Here there be a footer!</footer>
    </>
  );
}
