import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';

const PackageDetail: React.FC = () => {
  const { name, slug } = useParams<{ name: string; slug: string }>();

  const destinationName = name?.replace(/-/g, ' ');
  const packageTitle = slug?.replace(/-/g, ' ');

  const title = packageTitle && destinationName ? `${packageTitle} – ${destinationName} | Astir Travel` : 'Package Detail | Astir Travel';
  const description = packageTitle && destinationName ? `Details and booking information for the ${packageTitle} package in ${destinationName}.` : 'Package detail page for Astir Travel.';

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={`${packageTitle}, ${destinationName}, travel, package, Astir Travel`}
      />
      <div className="container py-5">
        <h1 className="mb-4">{packageTitle} – {destinationName}</h1>
        <p>This is a detailed page for the <strong>{packageTitle}</strong> package in <strong>{destinationName}</strong>.</p>

        {/* You can show images, itinerary, price, booking here */}
      </div>
    </>
  );
};

export default PackageDetail;
