import Helment from "react-helmet";
import favicon from "../images/favicon_img.png";
// import preview from "../images/preview.png"
const MetaInfo = () => {
  return (
    <Helment>
      <title>Min Gong | My Portfolios</title>
      <meta
        name="description"
        content="Min Gong, A Web Developer"
      />
     
      <link rel="icon" type="image/png" href={favicon} sizes="192x192" />
    </Helment>
  );
};

export default MetaInfo;
