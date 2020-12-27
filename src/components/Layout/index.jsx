import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
//import Header from "../Header"
import Navbar from "../Navbar";

// Global styles and component-specific styles.
import "./index.css";
import styles from "./main.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="bg-gray-900 text-gray-100">
      <Helmet title="Gatsby Simple Firebase Authentication" />
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main className={styles.main}>
        <div
          className="bg-contain md:bg-contain bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://github.com/r951236958/nextjs-tailwindcss/blob/main/public/assets/img/register_bg_2.png?raw=true')"
          }}
        >
          <div className={styles.container}>{children}</div>
        </div>
      </main>
    </div>
  );
};
export default Layout;
