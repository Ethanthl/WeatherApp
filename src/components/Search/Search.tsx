import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchWeather } from "../../store/apiSlice";
const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState({ country: "", city: "" });

  const handleChange = (e: React.ChangeEvent<any>) => {
    setData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    dispatch(fetchWeather(data));
    // dispatch(addQuery(data));
  };
  return (
    <div className="search">
      <input name="city" className="bg-cardLight dark:bg-cardDark" onChange={(e) => handleChange(e)} placeholder="Country"></input>
      {/* <input name="country" onChange={(e) => handleChange(e)}></input> */}
      <button className="search-btn bg-primary dark:bg-primaryDark" onClick={() => handleSubmit()}>S</button>
    </div>
  );
};

export default Search;
