import { useState } from "react";
import PropTypes from "prop-types";

const guestCapacityOptions = [
  "0-50",
  "51-100",
  "101-150",
  "151-200",
  "201-250",
  "251-300",
  "300+",
];
const priceOptions = [
  "$ - Inexpensive",
  "$$ - Affordable",
  "$$$ - Moderate",
  "$$$$ - Expensive",
];
const venueTypes = [
  "Backyard",
  "Ballroom",
  "Barn",
  "Beach",
  "Brew & Distillery",
  "Castle",
  "City Hall",
  "Country Club",
  "Cruise",
  "Desert",
  "Estate",
  "Garden",
  "Historic Venue",
  "Hotel",
  "Industrial & Warehouse",
  "Library",
  "Loft",
  "Mountain",
  "Museum",
  "Park",
  "Religious Setting",
  "Restaurant",
  "Rooftop",
  "Tented",
  "Trees",
  "Vineyard & Winery",
];
const venueAmenities = [
  "Ceremony Area",
  "Dressing Room",
  "Handicap Accessible",
  "Indoor Event Space",
  "Liability Insurance",
  "On-site Accommodations",
  "Reception Area",
  "Wireless Internet",
];
const vendorTeams = [
  "Wedding Bands",
  "Wedding Catering",
  "Wedding Cake",
  "Wedding DJ",
  "Wedding Dress",
  "Wedding Flowers",
  "Wedding Hair & Makeup",
  "Wedding Invitations",
  "Wedding Photograpers",
  "Wedding Planners/Designers",
  "Wedding Rings",
  "Wedding Videographers",
];
const affiliations = ["Destination Weddings"];
const diversityFilter = [
  "Asian-owned Business",
  "Black-owned Business",
  "Hispanic-Latina-owned Business",
  "Native-American-owned Business",
  "Pacific Islander-owned Business",
  "Veteran-owned Business",
  "Woman-owned Business",
];
const outdoorsFilter = ["Outdoor Event Space", "Covered Outdoor Space"];

const options = [
  { category: "Guest Capacity", options: guestCapacityOptions },
  { category: "Price", options: priceOptions },
  { category: "Diversity", options: diversityFilter },
  { category: "Venue Types", options: venueTypes },
  { category: "Venue Amenities", options: venueAmenities },
  { category: "Venue Vendors", options: vendorTeams },
  { category: "Affiliations", options: affiliations },
  { category: "Outdoors", options: outdoorsFilter },
];

const moreFilterOptions = [
  { category: "Guest Capacity", options: guestCapacityOptions },
  { category: "Venue Types", options: venueTypes },
  { category: "Venue Amenities", options: venueAmenities },
  { category: "Venue Vendors", options: vendorTeams },
  { category: "Affiliations", options: affiliations },
];
const diversityFilterOptions = [
  { category: "Diversity", options: diversityFilter },
];
const priceFilterOptions = [{ category: "Price", options: priceOptions }];
const outdoorsFilterOptions = [
  { category: "Outdoors", options: outdoorsFilter },
];

function CloseIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <mask
        id="mask0_3585_3712"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <rect width="40" height="40" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3585_3712)">
        <path
          d="M10.6666 31.6666L8.33325 29.3333L17.6666 19.9999L8.33325 10.6666L10.6666 8.33325L19.9999 17.6666L29.3333 8.33325L31.6666 10.6666L22.3333 19.9999L31.6666 29.3333L29.3333 31.6666L19.9999 22.3333L10.6666 31.6666Z"
          fill="#6E7C99"
        />
      </g>
    </svg>
  );
}

MobileModal.propTypes = {
  category: PropTypes.string,
  options: PropTypes.array,
  selectedOptions: PropTypes.object,
  setSelectedOptions: PropTypes.func,
  selectedRadio: PropTypes.object,
  setSelectedRadio: PropTypes.func,
};
function MobileModal({
  category,
  options,
  selectedOptions,
  setSelectedOptions,
  selectedRadio,
  setSelectedRadio,
}) {
  const handleOptionChange = (e) => {
    const option = e.target.name;
    const isChecked = e.target.checked;
    if (category === "Guest Capacity") {
      setSelectedRadio(option);
    } else {
      setSelectedOptions((prevSelected) => {
        const prevOptions = prevSelected[category] || [];
        const newOptions = isChecked
          ? [...prevOptions, option]
          : prevOptions.filter((o) => o !== option);
        return { ...prevSelected, [category]: newOptions };
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 text-[#161616]">
      <h2 className="text-lg">{category}</h2>
      <div
        className={`grid ${
          category === "Guest Capacity" ? "grid-cols-2" : "grid-cols-1"
        } gap-x-4 lg:grid-cols-2`}
      >
        {options.map((option, i) => (
          <div key={i} className="flex items-center">
            <input
              id={option}
              name={category === "Guest Capacity" ? category : option}
              type={category === "Guest Capacity" ? "radio" : "checkbox"}
              className={`h-4 w-4 text-indigo-600 duration-150 focus:ring-indigo-600 ${
                category === "Guest Capacity" ? "" : "rounded-sm"
              } `}
              checked={selectedOptions[category]?.includes(option)}
              defaultChecked={
                selectedRadio !== null && selectedRadio === option
              }
              onChange={handleOptionChange}
            />
            <label
              htmlFor={option}
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

FilterModals.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  selectedOptions: PropTypes.object,
  setSelectedOptions: PropTypes.func,
  selectedRadio: PropTypes.object,
  setSelectedRadio: PropTypes.func,
};
function FilterModals({
  isOpen,
  closeModal,
  selectedOptions,
  setSelectedOptions,
  selectedRadio,
  setSelectedRadio,
}) {
  const modalClass = isOpen
    ? "translate-y-0 transition-all duration-500 ease-in-out opacity-1"
    : "translate-y-[100vh] transition-all duration-500 ease-in-out opacity-0";
  return (
    <>
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-500 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`flex w-full flex-col gap-4 overflow-auto bg-white p-4 ${modalClass}`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">More Filters</h1>
          <div
            className="scale-90 cursor-pointer duration-300 hover:scale-110"
            onClick={closeModal}
          >
            <CloseIcon />
          </div>
        </div>
        <hr />
        {options.map((optionSet, i) => (
          <MobileModal
            key={i}
            category={optionSet.category}
            options={optionSet.options}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
        ))}
        <div className="flex gap-4">
          <button className="btnOutline mobileText basis-1/2 py-2">
            Reset
          </button>
          <button className="btnBudgetSolid mobileText basis-1/2 py-2">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterModals;
