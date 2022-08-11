import React from "react";
import RootLayout from "./src/roots-layout";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
