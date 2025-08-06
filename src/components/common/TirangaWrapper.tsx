import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/pages/TirangaWrapper.scss';
interface TirangaWrapperProps {
  children: React.ReactNode;
}

const TirangaWrapper: React.FC<TirangaWrapperProps> = ({ children }) => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  if (!isHomePage) return <>{children}</>; // For other routes, just return children

  return (
    <div className="tiranga-container">
      <div className="saffron" />
      <div className="white">
        <div className="chakra-wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/1024px-Ashoka_Chakra.svg.png"
            alt="Ashoka Chakra"
            className="chakra"
          />
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="green" />
    </div>
  );
};

export default TirangaWrapper;
