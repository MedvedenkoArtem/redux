import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Weather {
  id: string;
  city: string;
  temp: number;
  icon: string;
}

interface WeatherState {
  current: Weather | null;
  saved: Weather[];
  error: string | null;
  loading: boolean;
}

const initialState: WeatherState = {
  current: null,
  saved: [],
  error: null,
  loading: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setWeather: (state, action: PayloadAction<Weather>) => {
      state.current = action.payload;
      state.error = null;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.current = null;
    },

    clearCurrent: (state) => {
      state.current = null;
    },

    saveWeather: (state) => {
      if (state.current) {
        state.saved.push(state.current);
        state.current = null;
      }
    },

    deleteWeather: (state, action: PayloadAction<string>) => {
      state.saved = state.saved.filter((w) => w.id !== action.payload);
    },

    deleteAll: (state) => {
      state.saved = [];
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;