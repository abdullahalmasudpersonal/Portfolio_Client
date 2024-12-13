import { Helmet } from "react-helmet-async";

const PageTitle = (pageTitle: string) => {
  return (
    <Helmet>
      <title>{pageTitle}&nbsp;|| Abdullah Al Masud</title>
    </Helmet>
  );
};

export default PageTitle;
