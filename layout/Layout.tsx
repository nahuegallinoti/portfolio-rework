import React, { ReactNode } from "react";
import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <NavBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
