import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchWeather } from "../../store/apiSlice";
import { Icon } from "@iconify/react";
import Countries from "./Countries";
const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState({ city: "", country: "" });
  const [error, setError] = useState(false);
  //Handle all input events based on name
  //input name must be same value as key in data
  const handleChange = (e: React.ChangeEvent<any>) => {
     setError(false);
    if (e.target.name === "country") {
       
      //Check if input country matches list any from Countries JSON file
      let countryMatch =
        Countries.find(
          (country) =>
            country.name.toLowerCase() === e.target.value.toLowerCase()
        ) ||
        Countries.find(
          (country) =>
            country.code.toLowerCase() === e.target.value.toLowerCase()
        );
      if (countryMatch) {
        // If a match is found, use the corresponding country code
        // if not found pass to api and return error
        const countryCode = countryMatch.code;
        setData((prevFormData) => ({
          ...prevFormData,
          [e.target.name]: countryCode,
        }));
      }
      //Handles rest of the inputs
    } else {
      setData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = () => {
    if (data.country !== "" || data.city !== "") {
      dispatch(fetchWeather(data));
    } else {
      setError(true);
    }
  };
  return (
    <div className="search">
      <div>
        <input
          name="city"
          className="bg-cardLight dark:bg-cardDark inputText"
          onChange={(e) => handleChange(e)}
          required
        ></input>
        <span className="floating-label text-grey">City</span>
        {error === true && (
          <small className="error text-white">Please enter a city or country</small>
        )}
      </div>
      {/* <div>
        <input type="text" className="inputText" />
        <span className="floating-label">Your email address</span>
      </div> */}
      {/* The input for country has been hidden uncomment to test*/}
      {/* <input
        name="country"
        className="bg-cardLight dark:bg-cardDark"
        onChange={(e) => handleChange(e)}
        placeholder="Country"
      ></input> */}
      <button
        className="search-btn bg-primary dark:bg-primaryDark text-light"
        onClick={() => handleSubmit()}
      >
        <Icon icon="mdi:search" width={34} />
      </button>
    </div>
  );
};

export default Search;
