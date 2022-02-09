import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const HomePage: NextPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <h3>Home</h3>
    </div>
  );
};

export default HomePage;
