import type { NextPage } from "next";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Welcome from "../components/Welcome/Welcome";
import Provider from "../context/Provider";
import Layout from "../layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-3/4 justify-center items-center mx-auto">
        <Welcome greet={`Welcome to my portfolio`} />
        <Provider>
          <AboutMe />
          <Technologies />
          <Projects />
        </Provider>
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
