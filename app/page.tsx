import React, { Suspense } from "react";
import Movies from "@/app/movies/page";

const Home = async () => {
  const component: JSX.Element = await Movies();
  return <Suspense>{component}</Suspense>;
};

export default Home;
