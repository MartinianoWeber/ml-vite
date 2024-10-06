import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./assets/ml-image-logo.png";
import Navbar from "./components/organisms/Navbar/Navbar";

export default function layout() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}
