import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
};

const SEO = ({ title, description, keywords }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default SEO;
