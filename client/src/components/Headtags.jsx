import { Helmet } from "react-helmet-async";

export const AppHeadTag = ({ pageTitle }) => {
    return (
      <Helmet>
        <title>{pageTitle} | Clotya</title>
        <meta
          name="description"
          content="one shop for all the clothing you need"
        />
        <meta
          property="og:title"
          content="Clotya shopping store"
        />
        <meta
          property="og:description"
          content="Clotya shopping store"
        />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />
  
        <meta
          name="keywords"
          content="shopping, clothes, wears, men, women, bags"
        />
        <meta name="author" content="Clotya" />
      </Helmet>
    );
  };
  