import { currentWeatherDTO, otherWeatherDTO } from "../types";

export * from "./queries";
import { useGeneralApiQuery } from "hooks";

export const useGetCurrentWeather = (id?: string | string[]) =>
  useGeneralApiQuery<currentWeatherDTO>(`/data/2.5/weather?id=${id}`);

export const useGetOtherWeather = (id?: string | string[]) =>
  useGeneralApiQuery<otherWeatherDTO>(`/data/2.5/forecast?id=${id}`);
