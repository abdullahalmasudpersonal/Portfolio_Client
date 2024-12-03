/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const PageTitle = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{pageTitle}&nbsp;|| Abdullah Al Masud</title>
    </Helmet>
  );
};

export default PageTitle;
