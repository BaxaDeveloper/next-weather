import React, { FC } from "react";
import { currentWeatherDTO, otherWeatherDTO } from "../../types";
import { CurrentDay, OtherDay } from "components";
import moment from "moment";

type Props = {
  currentWeather?: currentWeatherDTO;
  otherWeather?: otherWeatherDTO;
};

export const Content: FC<Props> = ({ currentWeather, otherWeather }) => {
  return (
    <div>
      {currentWeather && (
        <CurrentDay
          name={currentWeather.name}
          date={currentWeather.dt}
          id={currentWeather.weather[0].id}
          temp={currentWeather.main.temp}
          description={currentWeather.weather[0].description}
          tempMax={currentWeather.main.temp_max}
          windSpeed={currentWeather.wind.speed}
          sunrise={currentWeather.sys.sunrise}
          clouds={currentWeather.clouds.all}
          tempMin={currentWeather.main.temp_min}
          sunset={currentWeather.sys.sunset}
        />
      )}
      {otherWeather && (
        <div className={"other_days_block"}>
          {otherWeather.list
            .filter((item) => {
              if (
                moment.unix(item.dt).format("HH:mm") === "11:00" &&
                moment().format("DD/MM/YYYY") !==
                  moment.unix(item.dt).format("DD/MM/YYYY")
              ) {
                return item;
              }
            })
            .map((item, index) => (
              <OtherDay
                id={item.weather[0].id}
                date={item.dt}
                description={item.weather[0].main}
                temp={item.main.temp}
                key={index}
              />
            ))}
        </div>
      )}
    </div>
  );
};
