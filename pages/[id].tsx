import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { useGetCurrentWeather, useGetOtherWeather } from "../hooks";
import { Content } from "../components";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const getCurrentWeather = useGetCurrentWeather(id);
  const getOtherWeather = useGetOtherWeather(id);

  return (
    <Content
      currentWeather={getCurrentWeather.data?.data}
      otherWeather={getOtherWeather.data?.data}
    />
  );
};

export default Home;
