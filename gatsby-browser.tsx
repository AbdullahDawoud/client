import React from "react";
import RootLayout from "./src/roots-layout";
import "./src/assets/styles/global.scss";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
