import Navigation from "../components/Navigation";
import Booking from "../components/Booking";

function Header(props) {
  const menuItems = ["Home", "About", "Service", "Careers"];
  return (
    <section className="header z-[10] absolute w-[100%]">
      <div className="container mx-auto p-2 flex flex-col lg:gap-24">
        <Navigation menuItems={menuItems} />
        <div className="intro w-96">
          <h2 className="nav-header leading-10 text-white">
            Start your unforgettable journer with us.
          </h2>
          <p className="subtitle text-sm text-gray-400 leading-9">
            The food division of the central
          </p>
        </div>
      </div>
      <Booking />
    </section>
  );
}

export default Header;
