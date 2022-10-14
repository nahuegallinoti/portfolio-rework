import type { NextPage } from "next";
import AboutMe from "../components/AboutMe/AboutMe";
import Divider from "../components/Shared/Divider";
import Technologies from "../components/Technologies/Technologies";
import Welcome from "../components/Welcome/Welcome";
import Provider from "../context/Provider";
import Layout from "../layout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome greet={`Welcome to my portfolio`} />
      <Provider>
        <AboutMe />
        <Technologies />
      </Provider>
    </Layout>
  );
};

export default Home;
