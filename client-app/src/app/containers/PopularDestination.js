import React, { useRef } from "react";
import ScrollHandlers from "../components/ScrollHandlers";
import PopularCard from "../components/PopularCard";

function PopularDestination(props) {
  let imageProps = [
    { src: "/assets/images/s1.jpg", title: "Title 1" },
    { src: "/assets/images/s2.jpg", title: "Title 2" },
    { src: "/assets/images/s3.jpg", title: "Title 3" },
    { src: "/assets/images/s4.jpg", title: "Title 4" },
    { src: "/assets/images/s5.jpg", title: "Title 5" },
    { src: "/assets/images/s2.jpg", title: "Title 6" },
  ];
  let swapperRef = useRef(null);
  return (
    <section className="popular-destination container mb-10 mx-auto p-2">
      <div className="flex flex-row mb-10">
        <div className="title flex-auto basis-[50%]">
          <h2 className="title-handle">Popular Destinations</h2>
          <p className="xs:hidd sm:invisible lg:visible">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            labore
          </p>
        </div>
        <div className="title flex basis-[50%] leading-[90px] justify-end justify-items-end lg:mr-5">
          <ScrollHandlers containerRef={swapperRef} scrollValue={100} />
        </div>
      </div>
      <section className="corousel overflow-x-auto w-[100%] overflow-y-hidden">
        <div className="Swrapper" id="swapper" ref={swapperRef}>
          {imageProps &&
            imageProps.map((image) => {
              return <PopularCard key={image?.title} asset={image?.src} />;
            })}
        </div>
      </section>
    </section>
  );
}

export default PopularDestination;
