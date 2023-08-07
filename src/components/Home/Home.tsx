import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchWeather } from "../../store/apiSlice";
import Cloud from "../../assets/images/cloud.png";
import Sun from "../../assets/images/sun.png";
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

  const kelvinToCelcus = (temp: number | undefined) => {
    if (temp) {
      let celsius = temp - 273.15;
      return celsius;
    }
  };
  return (
    <div>
      <div className="home-container bg-cardLight dark:bg-cardDark border border-light">
        {data?.cod != 404 ? (
          <>
            <img
              className="weather-img"
              src={data?.weather[0].main === "Clouds" ? Cloud : Sun}
            ></img>
            <h2 className="text-dark dark:text-light">Today's Weather</h2>
            <h1 className="text-primary dark:text-light">
              {kelvinToCelcus(data?.main?.temp)?.toFixed(0)}&deg;
            </h1>
            <div>
              H: {kelvinToCelcus(data?.main?.temp_min)?.toFixed(0)}&deg; L:{" "}
              {kelvinToCelcus(data?.main?.temp_max)?.toFixed(0)}&deg;
            </div>
            <div className="row details text-grey dark:text-light">
              <h3 className="font-bold details-country">
                {data?.name}, {data?.sys?.country}
              </h3>
              <div className="row details details-right">
              <div>
                {data?.date} &nbsp;
                {data?.time}
              </div>
              <div>Humidity: {data?.main?.humidity}%</div>
              <div>{data?.weather[0].main}</div>
              </div>
              {/* <div>{data?.weather[0].description}</div> */}
            </div>{" "}
          </>
        ) : (
          <div>{data?.message}</div>
        )}
        <SearchHistory />
      </div>
    </div>
  );
};

export default Home;
