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
    <div>
      <input name="city" onChange={(e) => handleChange(e)}></input>
      <input name="country" onChange={(e) => handleChange(e)}></input>
      <button onClick={() => handleSubmit()}>Search</button>
    </div>
  );
};

export default Search;
