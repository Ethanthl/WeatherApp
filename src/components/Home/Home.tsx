import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchWeather } from "../../store/apiSlice";
import Search from "../Search/Search";
import SearchHistory from "../History/History";
const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.api);
  //   console.log(data);
  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  let time = new Date().toLocaleString("en-US", {
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
  });

  const kelvinToCelcus = (temp: number | undefined) => {
    if (temp) {
      let celsius = temp - 273.15;
      return celsius;
    }
  };
  return (
    <div>
      {data?.cod != 404 ? (
        <div className="home-container bg-cardLight dark:bg-cardDark border border-dark">
          <h1 className="text-light dark:text-dark">{data?.main?.temp}</h1>
          <h1 className="text-headerLight dark:text-headerDark">
            {kelvinToCelcus(data?.main?.temp)?.toFixed(0)}
          </h1>
          <div>
            {data?.name}, {data?.sys?.country}
          </div>
          <div>{data?.weather[0].main}</div>
          <div>{data?.weather[0].description}</div>
          <div>
            {kelvinToCelcus(data?.main?.temp_min)?.toFixed(0)} -{" "}
            {kelvinToCelcus(data?.main?.temp_max)?.toFixed(0)}
          </div>
          <div>{data?.main?.humidity}%</div>
          <div>
            {date} &nbsp;
            {time}
          </div>
        </div>
      ) : (
        <div>{data?.message}</div>
      )}
      <SearchHistory />
    </div>
  );
};

export default Home;
