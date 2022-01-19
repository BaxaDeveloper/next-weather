import type { NextPage } from "next";
import { useGetCurrentWeather, useGetOtherWeather } from "../hooks";
import { Content } from "components";

const Home: NextPage = () => {
  const getCurrentWeather = useGetCurrentWeather("2643743");
  const getOtherWeather = useGetOtherWeather("2643743");
  return (
    <Content
      currentWeather={getCurrentWeather.data?.data}
      otherWeather={getOtherWeather.data?.data}
    />
  );
};

export default Home;
