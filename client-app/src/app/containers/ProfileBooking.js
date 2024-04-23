import React from 'react';
import Link from 'next/link';
function ProfileBooking(props) {
    return (
        <section className="booking-mobile block container mx-auto mb-14 p-5">
        <div className="flex flex-col">
          <div className="starting-end-mobile-booking mb-5">
            <div
              className="container justify-items-center flex flex-col gap-5 align-middle mx-auto lg:pl-16 w-[100%]"
            >
              <input
                className="input-text align-middle justify-center lg:leading-[50px] sm:leading-[20px]"
                type="text"
                value="Enter Location"
                placeholder="location"
              />
              <select
                name="no-of-beds"
                className="styled-select mr-7 w-full"
                
              >
                <option value="Select no of beds" className="options">
                  Select no of beds
                </option>
                <option value="1" className="options">1</option>
                <option value="2" className="options">2</option>
                <option value="3" className="options">3</option>
                <option value="4" className="options">4</option>
                <option value="5" className="options">5</option>
              </select>
              <select
                name="Hotels"
                className="styled-select w-full"
                
              >
                <option value="Select Hotels" className="options">
                  Select hotel
                </option>
                <option value="Hotel del annapurna" className="options">1</option>
                <option value="Shivakoti" className="options">2</option>
                <option value="Arrirang" className="options">3</option>
                <option value="Pokhatar" className="options">4</option>
                <option value="Libanm" className="options">5</option>
              </select>
            </div>
          </div>
          <div className="far-end-booking rounded-none"><p>Book Now</p></div>
        </div>
      </section>
    );
}

export default ProfileBooking;