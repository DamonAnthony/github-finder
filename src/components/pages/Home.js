import React, { Fragment } from "react";
import Search from "../Users/Search";
import Users from "../Users/User";

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
