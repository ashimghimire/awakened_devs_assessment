import React, { useEffect, useRef } from "react";

const ScrollHandlers = ({ containerRef, scrollValue }) => {
  let myRef = useRef(null);
  useEffect(() => {
    if (containerRef != null) myRef.current = containerRef;
    // setCurrentValue(scrollValue);
  });

  const scroll = (option) => {
    const performScroll = (direction) => {
      if (myRef.current != null) {
        let element = myRef.current?.current;
        if (element) {
          const scrollOptions = {
            behavior: "smooth", // Enable smooth scrolling
            left: direction === "left" ? 0 : element.scrollWidth, // Scroll to the left or right edge based on the direction
          };
          element.scrollTo(scrollOptions);
        }
      }
    };
    switch (option) {
      case "right":
        performScroll("right");
        break;
      case "left":
        performScroll("left");
        break;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-row flex-wrap gap-2 justify-right justify-items-right">
      <button
        onClick={() => {
          scroll("right");
        }}
        className="bg-slate-500 h-[40px] w-[40px] flex align-middle items-center justify-right justify-items-right p-0 m-0 text-white rounded py-0 px-3"
      >
        &gt;
      </button>
      <button
        onClick={() => {
          scroll("left");
        }}
        className="bg-orange-400 h-[40px] w-[40px] flex align-middle items-center justify-right justify-items-right p-0 m-0 text-white rounded py-0 px-3"
      >
        &lt;
      </button>
    </div>
  );
};

export default ScrollHandlers;
