import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Movie | {titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
