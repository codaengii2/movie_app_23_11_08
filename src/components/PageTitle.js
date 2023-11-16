import { Helmet } from "react-helmet";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>Movie |{titleName}</title>
    </Helmet>
  );
};
