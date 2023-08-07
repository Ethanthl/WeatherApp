import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addWeatherData } from "./historySlice";

const API_ENDPOINT = "https://api.example.com/data";
let today = new Date(),
  date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

let time = new Date().toLocaleString("en-US", {
  hour: "2-digit",
  hour12: true,
  minute: "2-digit",
});
//Api response value
interface ApiState {
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
  time: Date;
}

interface CountryState {
  //   country?: string;
  city: string;
}

//API Call to fetch weather
export const fetchWeather = createAsyncThunk(
  "fetch",
  async (input: CountryState | undefined, thunkAPI) => {
    try {
      //get city & country from user input
      let city: string = input?.city ? input?.city : "singapore";

      const response = await fetch(
        // "https://swapi.dev/api/people/1/",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fed486ef4a7c6ba47f4a40c75e08a14`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      data.time = new Date().getTime();
      console.log(data);
      //Only add to history if response is not error and was searched by user
      if (input && data.cod != 404) {
        //Save search data to history
        thunkAPI.dispatch(addWeatherData(data));
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: null as ApiState | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default apiSlice.reducer;
