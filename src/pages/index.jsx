import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import View from "../components/View";
import Popover from "../components/Popover";

const Index = () => {
  return (
    <Layout>
      <View title="Firebase Authentication Starter">
        <p>
          <span role="img" aria-label="Hi">
            👋{" "}
          </span>
          This is a simple demo of creating dynamic pages with Gatsby that
          require <b>user authentication</b> and using <b>Firebase</b> as
          authentication provider.
        </p>
        <br />
        <p>
          <span role="img" aria-label="Books">
            📚{" "}
          </span>{" "}
          It uses concepts from the
          {` `}
          <a
            className="underline text-blue-500"
            href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/"
          >
            client-only routes section
          </a>
          {` `} and {` `}
          <a
            className="underline text-blue-500"
            href="https://www.gatsbyjs.org/tutorial/authentication-tutorial"
          >
            making a site with user authentication
          </a>
          {` `}
          tutorial in the official gatsby doc.
        </p>
        <br />
        <p>
          This is the public home, and here it is a private route to start:
          <br />
          <Link
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
            to="/app/profile"
          >
            Go to your profile
          </Link>
        </p>
        <Popover
          color="gray"
          btnText="Hey"
          el="bottom"
          popTitle="Popover Title"
          popText={<p>popover test</p>}
        />
        <Popover color="red" btnText="RedButton" el="top" />
      </View>
    </Layout>
  );
};

export default Index;
