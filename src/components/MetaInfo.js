import Helmet from "react-helmet";
import favicon from "../images/favicon_img.png";

const MetaInfo = () => {
  return (
    <Helmet>
      <title>Min Gong — Full-stack developer</title>
      <meta
        name="description"
        content="Min Gong — full-stack developer based in Vancouver. React, Next.js, React Native. Open to roles and freelance work."
      />
      <link rel="icon" type="image/png" href={favicon} sizes="192x192" />
    </Helmet>
  );
};

export default MetaInfo;
