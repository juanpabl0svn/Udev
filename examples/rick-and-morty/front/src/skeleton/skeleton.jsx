import React from "react";
import "./skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-image"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

export default Skeleton;
