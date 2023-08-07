import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { removeWeatherData } from "../../store/historySlice";
import { Icon } from "@iconify/react";
import { fetchWeather } from "../../store/apiSlice";
const SearchHistory = () => {
  const history = useSelector(
    (state: RootState) => state.history.weatherHistory
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (i: number) => {
    dispatch(removeWeatherData(i));
  };

  const handleSearch = (country: string) => {
    dispatch(fetchWeather({ city: country }));
  };
  return (
    <div className="history bg-cardLight dark:bg-cardDark">
      <h2>Search History</h2>
      <ul>
        {/* reverse array so latest search at top */}
        {history
          .slice()
          .reverse()
          .map((item, index) => (
            <li key={index} className="bg-cardLight50 dark:bg-cardDark50">
              <div className="history-item-content">
                <div>
                  {item.name}, {item.sys.country}
                </div>
                <small>
                  {item.date} {item.time}
                </small>
              </div>
              <div className="list-buttons">
                <button
                  className="delete history-btn shadow-md dark:shadow-none border-0 dark:border-2 dark:border-lighter bg-light dark:bg-transparent border-dark dark:border-light ml-3"
                  onClick={() => {
                    handleSearch(item?.name);
                  }}
                >
                  <Icon
                    className="text-grey dark:text-lighter"
                    icon="mdi:search"
                  />
                </button>
                <button
                  className="delete history-btn shadow-md dark:shadow-none border-0 dark:border-2 dark:border-lighter bg-light dark:bg-transparent border-dark dark:border-light ml-3"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <Icon
                    className="text-grey dark:text-lighter"
                    icon="mingcute:delete-fill"
                  />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
