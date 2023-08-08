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

  const handleSearch = (city: string, country: string) => {
    dispatch(fetchWeather({ city: city, country: country }));
  };

  return (
    <div className="history bg-cardLight dark:bg-cardDark">
      <h2>Search History</h2>
      <ul>
        {history.length !== 0 ? (
          // Render history items if history exists
          <>
            {/* Reverse array so latest search is at the top */}
            {history
              .slice()
              .reverse()
              .map((item, index, arr) => {
                // Get the original index of the item before reversing
                const originalIndex = arr.length - index - 1;
                return (
                  <li key={index} className="bg-cardLight50 dark:bg-cardDark50">
                    <div className="history-item-content">
                      <div>
                        {item.name}, {item.sys.country}
                      </div>
                      <small className="text-dark dark:text-lighter">
                        {item.date} {item.time}
                      </small>
                    </div>
                    <div className="list-buttons">
                      <button
                        className="delete history-btn shadow-md dark:shadow-none border-0 dark:border-2 dark:border-lighter bg-light dark:bg-transparent border-dark dark:border-light ml-3"
                        onClick={() => {
                          handleSearch(item?.name, item.sys.country);
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
                          handleDelete(originalIndex);
                        }}
                      >
                        <Icon
                          className="text-grey dark:text-lighter"
                          icon="mingcute:delete-fill"
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
          </>
        ) : (
          // Render an empty list item if history is empty
          <li className="bg-cardLight50 dark:bg-cardDark50">
            {" "}
            <div className="history-item-content ">
              <div className="w-full text-center">No records </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchHistory;
