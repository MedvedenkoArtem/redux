import { useAppDispatch, useAppSelector } from "store/hooks";
import { weatherActions } from "store/redux/weatherSlice/weatherSlice";

import {
  PageWrapper,
  CardsContainer,
  Card,
  Button,
  DeleteAllButton,
} from "./styles";

function Weather() {
  const dispatch = useAppDispatch();
  const saved = useAppSelector((state) => state.weather.saved);

  return (
    <PageWrapper>
      {saved.length === 0 && <p>No saved cards ❌</p>}

      <CardsContainer>
        {saved.map((item) => (
          <Card key={item.id}>
            <h3>{item.city}</h3>

            <img
              src={`http://openweathermap.org/img/w/${item.icon}2x.png`}
            />

            <p>{item.temp}°C</p>

            <Button
              onClick={() => {
                dispatch(weatherActions.deleteWeather(item.id));
                alert("Deleted ❌");
              }}
            >
              Delete
            </Button>
          </Card>
        ))}
      </CardsContainer>

      {saved.length > 0 && (
        <DeleteAllButton
          onClick={() => {
            dispatch(weatherActions.deleteAll());
            alert("All deleted ❌");
          }}
        >
          Delete all cards
        </DeleteAllButton>
      )}
    </PageWrapper>
  );
}

export default Weather;