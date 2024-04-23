import React ,{useRef} from 'react';
import Link from 'next/link';
import ScrollHandlers from '../components/ScrollHandlers';
function PopularDestination(props) {
  let swapperRef=useRef(null);
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
        <div
          className="title flex basis-[50%] leading-[90px] justify-end justify-items-end lg:mr-5"
        >
          <ScrollHandlers containerRef={swapperRef} scrollValue={100}/>
        </div>
      </div>
      <section className="corousel overflow-x-auto w-[100%] overflow-y-hidden">
        <div className="Swrapper" id="swapper" ref={swapperRef}>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s1.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s2.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s3.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s4.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s5.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s1.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s2.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s3.jpg"
              alt="slider-image"
            />
          </div>
          <div className="item rounded-lg">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="/assets/images/s4.jpg"
              alt="slider-image"
            />
          </div>
        </div>
      </section>
    </section>
    );
}

export default PopularDestination;