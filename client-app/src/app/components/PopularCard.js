/* eslint-disable @next/next/no-img-element */
import React from "react";

function PopularCard({ asset }) {
  return (
    <div className="item rounded-lg">
      <img
        className="object-cover h-full w-full rounded-lg"
        src={asset}
        alt="slider-image"
      />
    </div>
  );
}

export default PopularCard;
