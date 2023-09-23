import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={360}
    viewBox="0 0 270 360"
    backgroundColor="#dbdbdb"
    foregroundColor="#e6e6e6"
  >
    <rect x="-1" y="0" rx="0" ry="0" width="270" height="179" />
    <rect x="-1" y="216" rx="0" ry="0" width="270" height="30" />
    <rect x="1" y="258" rx="0" ry="0" width="270" height="30" />
    <rect x="1" y="332" rx="0" ry="0" width="120" height="24" />
    <rect x="147" y="332" rx="0" ry="0" width="120" height="24" />
  </ContentLoader>
);

export default Skeleton;
