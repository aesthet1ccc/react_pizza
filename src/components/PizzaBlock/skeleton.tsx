import ContentLoader from "react-content-loader";
import React from "react";

const Skeleton: React.FC = (props: {}) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="126" r="125" />
    <rect x="0" y="270" rx="10" ry="10" width="280" height="22" />
    <rect x="-2" y="309" rx="9" ry="9" width="280" height="88" />
    <rect x="3" y="423" rx="10" ry="10" width="90" height="28" />
    <rect x="129" y="415" rx="14" ry="14" width="150" height="45" />
  </ContentLoader>
);

export default Skeleton;
