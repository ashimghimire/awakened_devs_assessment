
import Link from 'next/link';

function Header(props) {
    return (
        <section className="header z-[10] absolute w-[100%]">
        <div className="container mx-auto p-2 flex flex-col lg:gap-24">
          <nav className="flex flex-row">
            <div
              className="brand flex-auto basis-1/3 flex flex-row leading-10 gap-2 mt-3"
            >
              <img src="/assets/images/icons-map1.png" className="leading-4 h-8 w-8" alt="site-icon" />
              <p className="text-white leading-8 text-lg/[24px] font-[600]">
                Travellian
              </p>
            </div>
            <div
              className="menu flex-auto basis-2/3 w-12 align-middle justify-center"
            >
              <ul className="list-none main-nav">
                <li className="inline-block m-5"><Link href={"#"}>Home</Link></li>
                <li className="inline-block sm:m-5 xs:m-3"><Link href={"#"}>Home</Link></li>
                <li className="inline-block sm:m-5 xs:m-3"><Link href={"#"}>Contact</Link></li>
                <li className="inline-block sm:m-5 xs:m-3"><Link href={"#"}>Usage</Link></li>
                <li className="inline-block sm:m-5 xs:m-3">
                  <Link href={"#"} className="active">Pin</Link>
                </li>
              </ul>
            </div>
            <div className="far-end-actions mt-3">
              <button className="bg-orange-600 text-white px-3 py-2 rounded">
                login
              </button>
              <button className="bg-black text-white px-3 py-2 rounded hidden">
                =
              </button>
            </div>
          </nav>
          <div className="intro w-96">
            <h2 className="nav-header leading-10 text-white">
              Start your unforgettable journer with us.
            </h2>
            <p className="subtitle text-sm text-gray-400 leading-9">
              The food division of the central
            </p>
          </div>
        </div>
        <div className="booking flex flex-row lg:mt-24 sm:mt-5">
          <div className="starting-end-booking">
            <div
              className="container justify-items-center flex flex-row align-middle mx-auto lg:pl-16 w-[100%]"
            >
              <input
                className="input-text align-middle justify-center lg:leading-[50px] sm:leading-[20px]"
                type="text"
                value="Enter Location"
                placeholder="location"
              />
              <select
                name="no-of-beds"
                className="styled-select mr-7"
                
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
              <select name="Hotels" className="styled-select">
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
          <div className="far-end-booking"><p>Book Now</p></div>
        </div>
      </section>
    );
}

export default Header;