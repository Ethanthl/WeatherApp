import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HistoryState {
  queries: string[];
  weatherHistory: WeatherData[];
}

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  message: string;
}

const initialState: HistoryState = {
  queries: [],
  weatherHistory: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addWeatherData: (state, action: PayloadAction<WeatherData>) => {
        console.log("history");
        console.log(action.payload);
        if (action.payload) {
          state.weatherHistory.push(action.payload);
        }
      },
      removeWeatherData: (state, action: PayloadAction<number>) => {
        console.log("history");
        console.log(action.payload);
        const index = action.payload
        if( index >=0 && index < state.weatherHistory.length) {
            state.weatherHistory.splice(index, 1);
        }
      },
    clearHistory: (state) => {
      state.queries = [];
    },
  },
});

export const { removeWeatherData, addWeatherData, clearHistory } = historySlice.actions;
export default historySlice.reducer;
