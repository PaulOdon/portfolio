import React from "react";
import AboutDescription from "../../components/pages/about";
import styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <AboutDescription />
    </div>
  );
};

export default About;
