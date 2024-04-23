import React, { useRef } from "react";
import ScrollHandlers from "../components/ScrollHandlers";
import SpecialOfferCard from "../components/SpecialOfferCard";

function SpecialOffers(props) {
  let swapperRef = useRef(null);
  const offer = [
    { image: "/assets/images/s1.jpg" },
    { image: "/assets/images/s2.jpg" },
    { image: "/assets/images/s3.jpg" },
    { image: "/assets/images/s4.jpg" },
  ];
  return (
    <section className="special-offers p-2 mb-10">
      <div className="container mx-auto">
        <div className="flex flex-row mb-10 sm:mb-6">
          <div className="title basis-[30%] leading-[90px]">
            <ScrollHandlers containerRef={swapperRef} scrollValue={100} />
          </div>
          <div className="title flex flex-col flex-auto basis-1 justify-items-end align-middle justify-end text-right">
            <h2 className="direction-rtl">Special Offer</h2>
            <p className="xs:invisible sm:invisible lg:visible">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
              labore
            </p>
          </div>
        </div>
      </div>
      <section className="corousel sm:container lg:mx-auto sm:mx-auto overflow-x-auto">
        <div className="Swrapper" ref={swapperRef} id="swapper">
          {offer?.map((offer, index) => {
            return <SpecialOfferCard key={index} offer={offer} />;
          })}
        </div>
      </section>
    </section>
  );
}

export default SpecialOffers;
