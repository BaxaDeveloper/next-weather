import React, { FC } from "react";
import moment from "moment";
import cn from "classnames";

import { weather } from "services";
import classes from "./OtherDays.module.scss";

type Props = {
  date: number;
  id: number;
  temp: number;
  description: string;
};

export const OtherDay: FC<Props> = ({ date, id, temp, description }) => {
  return (
    <>
      <div className={classes["other-day-item"]} key={date}>
        <span className={classes["weather-day"]}>
          {moment.unix(date).format("dddd")}
        </span>
        <div className={classes.wrap}>
          <div
            className={cn(
              classes[`weather-icon-small`],
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
      </div>
    </>
  );
};
