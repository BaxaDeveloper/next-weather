import React, { FC } from "react";
import moment from "moment";
import cn from "classnames";

import { weather } from "services";
import classes from "./CurrentDay.module.scss";

type Props = {
  name: string;
  date: number;
  id: number;
  temp: number;
  description: string;
  tempMax: number;
  tempMin: number;
  windSpeed: number;
  sunrise: number;
  sunset: number;
  clouds: number;
};
export const CurrentDay: FC<Props> = ({
  name,
  date,
  id,
  temp,
  description,
  tempMax,
  tempMin,
  windSpeed,
  sunrise,
  sunset,
  clouds,
}) => {
  return (
    <div className={classes["current-day"]}>
      <h2 className={classes.title}>{name}</h2>
      <div className={classes.date}>{moment(date).format("dddd DD MMMM")}</div>
      <div className={classes["current-day__block"]}>
        <div className={classes["block-main"]}>
          <div
            className={cn(
              classes["weather-icon"],
              `weather-icon-${weather(id)}`
            )}
          />
          <div className={classes.text}>
            <span className={classes.temp}>
              {temp > 0 ? "+" : ""}
              {temp.toFixed(0)}°
            </span>
            <span className={classes.desc}>{description}</span>
          </div>
        </div>

        <div className={classes["right-block"]}>
          <div className={classes.item}>
            <div className={classes.label}>{tempMax}°</div>
            <div className={classes.desc}>Hight</div>
          </div>
          <div className={classes.item}>
            <div className={classes.label}>{windSpeed}Mph</div>
            <div className={classes.desc}>Wind</div>
          </div>
          <div className={classes.item}>
            <div className={classes.label}>
              {moment.unix(sunrise).format("hh:mm")}
            </div>
            <div className={classes.desc}>Sunrise</div>
          </div>
          <div className={classes.item}>
            <div className={classes.label}>{clouds}%</div>
            <div className={classes.desc}>Rain</div>
          </div>
          <div className={classes.item}>
            <div className={classes.label}>{tempMin}°</div>
            <div className={classes.desc}>Low</div>
          </div>

          <div className={classes.item}>
            <div className={classes.label}>
              {moment.unix(sunrise).format("hh:mm")}
            </div>
            <div className={classes.desc}>{sunset}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
