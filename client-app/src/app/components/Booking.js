import React from "react";
import { withFormik } from "formik";

function Booking(props) {
  const {
    touched,
    submitForm,
    isSubmitting,
    isValid,
    handleBlur,
    values,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <div className="booking flex flex-row lg:mt-24 sm:mt-5">
      <form className="flex flex-row">
        <div className="starting-end-booking">
          <div className="container justify-items-center flex flex-row align-middle mx-auto lg:pl-16 w-[100%]">
            <input
              className="input-text align-middle justify-center lg:leading-[50px] sm:leading-[20px]"
              type="text"
              name="location"
              onBlur={handleBlur}
              value={values.location}
              onChange={handleChange}
              placeholder="location"
            />
            <select
              className="styled-select mr-7"
              name="no_beds"
              placeholder="No_of_beds"
              onChange={handleChange}
              value={values.no_beds}
            >
              <option value="Select no of beds" className="options">
                Select no of beds
              </option>
              <option value="1" className="options">
                1
              </option>
              <option value="2" className="options">
                2
              </option>
              <option value="3" className="options">
                3
              </option>
              <option value="4" className="options">
                4
              </option>
              <option value="5" className="options">
                5
              </option>
            </select>
            <select
              name="hotels"
              value={values.hotels}
              onChange={handleChange}
              className="styled-select"
            >
              <option
                value="Select Hotels"
                placeholder="Hotels"
                className="options"
              >
                Select hotel
              </option>
              <option value="Hotel del annapurna" className="options">
                1
              </option>
              <option value="Shivakoti" className="options">
                2
              </option>
              <option value="Arrirang" className="options">
                3
              </option>
              <option value="Pokhatar" className="options">
                4
              </option>
              <option value="Libanm" className="options">
                5
              </option>
            </select>
          </div>
        </div>
        <div
          className="far-end-booking"
          onClick={() => {
            submitForm;
          }}
        >
          <p>Book Now</p>
        </div>
      </form>
    </div>
  );
}

const BookingForm = withFormik({
  mapPropsToValues: () => ({ location: "", no_beds: "", hotels: "" }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.location) {
      errors.location = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BookingForm",
})(Booking);
export default BookingForm;
