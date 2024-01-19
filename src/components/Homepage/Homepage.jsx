import React from "react";
import styles from "./homepage.module.css";
import Navbar from "../Navbar/Navbar";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <h1>This is the home page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        eaque atque molestias harum consectetur earum perferendis ducimus quidem
        est? Provident praesentium quia nesciunt saepe id, qui aliquam et quidem
        blanditiis.
      </p>
    </div>
  );
};

export default Homepage;
