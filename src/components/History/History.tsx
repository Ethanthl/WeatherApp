import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { removeWeatherData } from "../../store/historySlice";

const SearchHistory = () => {
  const history = useSelector(
    (state: RootState) => state.history.weatherHistory
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (i: number) => {
    dispatch(removeWeatherData(i));
  };
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.name}, {item.sys.country}
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
