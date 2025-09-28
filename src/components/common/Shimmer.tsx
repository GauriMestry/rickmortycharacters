import "../styles/shimmerStyles.css";

import { JSX } from "react/jsx-runtime";

export const TableCellShimmer = (): JSX.Element => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer"></div>
    </div>
  );
};

export const DetailsFieldShimmer = (): JSX.Element => {
  return (
    <div className="details-shimmer">
      <div className="field-shimmer"></div>
    </div>
  );
};

export const ImageShimmer = (): JSX.Element => {
  return <div className="image-shimmer"></div>;
};
