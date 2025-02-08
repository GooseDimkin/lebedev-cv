import React from "react";
import styles from "./moreAboutMe.module.scss";
import withHairs from "src/assets/me/withHairs.jpg";
import withoutHairs from "src/assets/me/withoutHairs.jpg";
import ReactCompareImage from "react-compare-image";

const MoreAboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <h2>My new hairstyle</h2>
      <ReactCompareImage leftImage={withoutHairs} rightImage={withHairs} />
    </div>
  );
};

export default MoreAboutMe;
