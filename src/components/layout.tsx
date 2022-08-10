import React from "react";
import Header from "./header";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div style={{ padding: "0px 40px" }}>{children}</div>
    </>
  );
};

export default Layout;
