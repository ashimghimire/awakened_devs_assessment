/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";
function Slideshow(props) {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);
  return (
    <section className="slideshow mb-10">
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        {/* <!--Carousel indicators--> */}
        <div
          className="absolute top-[50%] right-0 z-[2] mx-[5%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators
        >
          <div className="flex flex-col gap-2">
            <div
              className="circle active-circle"
              data-twe-target="#carouselExampleCaptions"
              data-twe-slide-to="0"
              data-twe-carousel-active
              aria-current="true"
              aria-label="Slide 1"
            ></div>
            <div
              className="circle"
              data-twe-target="#carouselExampleCaptions"
              data-twe-slide-to="1"
              aria-label="Slide 2"
            ></div>
            <div
              className="circle"
              data-twe-target="#carouselExampleCaptions"
              data-twe-slide-to="2"
              aria-label="Slide 3"
            ></div>
          </div>
        </div>

        {/* <!--Carousel items--> */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            className="relative float-left -me-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-active
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
              className="block w-full"
              alt="..."
            />
          </div>
          {/* <!--Second item--> */}
          <div
            className="relative float-left -me-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
          </div>
          {/* <!--Third item--> */}
          <div
            className="relative float-left -me-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
          </div>
        </div>
      </div>
      {/* <!-- <img src="./m1.jpg" className="responsive-image h-[600px] w-[100%]"/> --> */}
    </section>
  );
}

export default Slideshow;
