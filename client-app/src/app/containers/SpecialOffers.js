import React, {useRef} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import ScrollHandlers from '../components/ScrollHandlers';

function SpecialOffers(props) {
  let swapperRef=useRef(null);
    return (
        <section className="special-offers p-2 mb-10">
        <div className="container mx-auto">
          <div className="flex flex-row mb-10 sm:mb-6">
            <div className="title basis-[30%] leading-[90px]">
            <ScrollHandlers containerRef={swapperRef} scrollValue={100}/>
            </div>
            <div
              className="title flex flex-col flex-auto basis-1 justify-items-end align-middle justify-end text-right"
            >
              <h2 className="direction-rtl">Special Offer</h2>
              <p className="xs:invisible sm:invisible lg:visible">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
                labore
              </p>
            </div>
          </div>
        </div>
        <section
          className="corousel sm:container lg:mx-auto sm:mx-auto overflow-x-auto"
        >
          <div className="Swrapper" ref={swapperRef}  id="swapper">
            <div
              className="card max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
            >
              <img
                className="w-full object-cover h-[40%]"
                src="/assets/images/s4.jpg"
                alt="Sunset in the mountains"
              />
              <div className="p-2 flex flex-col lg:gap-4 sm:gap-1">
                <div className="font-bold card-title lg:text-lg text-gray-400">
                  The Coldest Sunset
                </div>
                <div className="flex flex-row gap-2">
                <FontAwesomeIcon  icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                </div>
                <p className="text-gray-400 lg:text-sm sm:text-xs sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat minima quos culpa unde eius obcaecatir?
                </p>
              </div>
              <div className="p-2 flex flex-row lg:gap-20 sm:gap-10">
                <p className="text-gray-500 text-sm flex-auto basis-1">
                  Price <span className="text-orange-400">2,193</span>
                </p>
                <Link href={"#"}
                  className="bg-orange-400 flex rounded text-white text-sm flex-auto basis-1 px-1 py-2 justify-center justify-items-center align-middle text-center"
                  >Book Now</Link>
              </div>
            </div>
            {/* <!-- card --> */}
            <div
              className="card max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
            >
              <img
                className="w-full object-cover h-[40%]"
                src="/assets/images/s4.jpg"
                alt="Sunset in the mountains"
              />
              <div className="p-2 flex flex-col lg:gap-4 sm:gap-1">
                <div className="font-bold card-title text-lg text-gray-400">
                  The Coldest Sunset
                </div>
                <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                </div>
                <p className="text-gray-400 lg:text-sm sm:text-xs sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat minima quos culpa unde eius obcaecatir?
                </p>
              </div>
              <div className="p-2 flex flex-row lg:gap-20 sm:gap-10">
                <p className="text-gray-500 text-sm flex-auto basis-1">
                  Price <span className="text-orange-400">2,193</span>
                </p>
                <Link
                href={"#"}
                  className="bg-orange-400 flex rounded text-white text-sm flex-auto basis-1 px-1 py-2 justify-center justify-items-center align-middle text-center"
                  >Book Now</Link>
              </div>
            </div>
            {/* <!-- card --> */}
            <div
              className="card max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
            >
              <img
                className="w-full object-cover h-[40%]"
                src="/assets/images/s4.jpg"
                alt="Sunset in the mountains"
              />
              <div className="p-2 flex flex-col gap-4">
                <div className="font-bold card-title text-lg text-gray-400">
                  The Coldest Sunset
                </div>
                <div className="flex flex-row gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-lg"/>
                </div>
                <p className="text-gray-400 lg:text-sm sub-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat minima quos culpa unde eius obcaecatir?
                </p>
              </div>
              <div className="p-2 flex flex-row lg:gap-20 sm:gap-10">
                <p className="text-gray-500 text-sm flex-auto basis-1">
                  Price <span className="text-orange-400">2,193</span>
                </p>
                <Link
                  href={"#"}
                  className="bg-orange-400 flex rounded text-white text-sm flex-auto basis-1 px-1 py-2 justify-center justify-items-center align-middle text-center"
                  >Book Now</Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
}

export default SpecialOffers;