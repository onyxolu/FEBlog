import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const theme: DocsThemeConfig = {
  project: {
    link: "https://github.com/onyxolu/FEBlog"
  },
  logo: () => (
    <>
      <img
        src="/logo.svg"
        height="25"
        width="25"
        style={{ marginRight: "1em" }}
      />
      <h1>
        Scalable UI <span style={{ opacity: 0.2 }}></span>
      </h1>
    </>
  ),
  head: function Head(props: any) {
    return (
      <>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/javascript.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/javascript.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/javascript.svg"
        />
        <link rel="mask-icon" href="/javascript.svg" color="#000000" />
        <link rel="shortcut icon" href="/javascript.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="description"
          content="Website about building scalable and high performant Frontend Solutions"
        />
        <meta name="author" content="Olumide Ogundare" />
        <meta
          property="og:url"
          content="https://olumide.dev/frontend"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta
          property="og:title"
          content={`${props.title} | Frontend Blog`}
        />
        <meta
          property="og:description"
          content="Website about building scalable and high performant Frontend Solutions"
        />
        
        {/* <meta
          property="og:image"
          content="https://blog-701q6kypq-onyxolu.vercel.app/ogimage1.png"
        /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lydiahallie" />
        <meta name="twitter:creator" content="@lydiahallie" /> */}
      </>
    );
  },
  darkMode: true,
  footer: {
    text: `${new Date().getFullYear()} © Olumide Ogundare`,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
