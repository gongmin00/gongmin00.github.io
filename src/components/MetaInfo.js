import Helment from "react-helmet";
import favicon from "../images/section-10-icon.png";
// import preview from "../images/preview.png"
const MetaInfo = () => {
  return (
    <Helment>
      <title>OPPOHack2021</title>
      <meta
        name="description"
        content="OPPOHack, the Global Innovation Competition"
      />
      <meta property="og:url" content="https://oppohack.com" />
      <link rel="icon" type="image/png" href={favicon} sizes="192x192" />
    </Helment>
  );
};

export default MetaInfo;
