import { useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { weatherActions } from "store/redux/weatherSlice/weatherSlice";

import {
  PageWrapper,
  Title,
  Input,
  Button,
  Card,
  ErrorText,
  SmallButton,
} from "./styles";

function Home() {
  const [city, setCity] = useState("");

  const dispatch = useAppDispatch();
  const { current, error, loading } = useAppSelector(
    (state) => state.weather
  );

  const handleSearch = async () => {
    if (!city) {
      alert("Enter city ❗");
      return;
    }

    try {
      dispatch(weatherActions.setLoading(true));

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=6785690d5b9867926b48399ca8f68fa1`
      );

      dispatch(
        weatherActions.setWeather({
          id: Date.now().toString(),
          city: res.data.name,
          temp: res.data.main.temp,
          icon: res.data.weather[0].icon,
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(weatherActions.setError("City not found ❌"));
    } finally {
      dispatch(weatherActions.setLoading(false));
    }
  };

  return (
    <PageWrapper>
      <Title>Weather App</Title>

      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
      />

      <Button onClick={handleSearch} disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </Button>

      {/* Weather */}
      {current && (
        <Card>
          <h3>{current.city}</h3>

          <img
            src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`}
          />

          <p>{current.temp}°C</p>

          <SmallButton
            onClick={() => {
              dispatch(weatherActions.saveWeather());
              alert("Saved ✅");
            }}
          >
            Save
          </SmallButton>

          <SmallButton
            onClick={() => dispatch(weatherActions.clearCurrent())}
          >
            Delete
          </SmallButton>
        </Card>
      )}

      {/* Error */}
      {error && (
        <Card>
          <ErrorText>{error}</ErrorText>

          <Button onClick={() => dispatch(weatherActions.clearError())}>
            Delete
          </Button>
        </Card>
      )}
    </PageWrapper>
  );
}

export default Home;