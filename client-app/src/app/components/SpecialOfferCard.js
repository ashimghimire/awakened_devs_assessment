import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { faStar } from "@fortawesome/free-regular-svg-icons";
/* eslint-disable @next/next/no-img-element */

function SpecialOfferCard({ offer }) {
  return (
    <div className="card max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
      <img
        className="w-full object-cover h-[40%]"
        src={offer.image}
        alt="Sunset in the mountains"
      />
      <div className="p-2 flex flex-col lg:gap-4 sm:gap-1">
        <div className="font-bold card-title lg:text-lg text-gray-400">
          The Coldest Sunset
        </div>
        <div className="flex flex-row gap-2">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg" />
        </div>
        <p className="text-gray-400 lg:text-sm sm:text-xs sub-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          minima quos culpa unde eius obcaecatir?
        </p>
      </div>
      <div className="p-2 flex flex-row lg:gap-20 sm:gap-10">
        <p className="text-gray-500 text-sm flex-auto basis-1">
          Price <span className="text-orange-400">2,193</span>
        </p>
        <Link
          href={"#"}
          className="bg-orange-400 flex rounded text-white text-sm flex-auto basis-1 px-1 py-2 justify-center justify-items-center align-middle text-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default SpecialOfferCard;
