import React from "react";
import styles from "./about.module.css";
import Svg from "../svg/svg";

const About = ({ Cursor, NavBtn }) => {
  return (
    <section className={styles.wrap}>
      <div className={styles.noise}></div>
      <NavBtn />
      <Cursor />
      <div className={styles.about_wrap}>
        <p className={styles.about}>
          <span className={styles.bold}>
            안녕하세요,
            <br className={styles.space} />
          </span>{" "}
          저는 프론트엔드 개발자를 꿈꾸는 박진입니다.
          <br />
          지난 2년 동안, 저는 Tomato Project, Hanmi Post,
          <br />
          Northern Esports Academy, Cheum Tour 에서
          <br className={styles.space} />
          그래픽디자이너
          <br className={styles.space_d} />로 일을 경험했습니다.
        </p>
        <p className={styles.about}>
          <span className={styles.bold}>저는 이런것을 다룰줄 압니다.</span>
          <br />
          Html - Css - JavaScript - React
          <br />
          Photoshop - Illustrator - <br className={styles.space} />
          Adobe Xd - Indesign - Premiere
        </p>
        <p className={styles.about}>
          봄아카데미 - 프론트엔드 개발자 부트캠프 10기
          <br />
          Seneca College - Creative Advertising
          <br />
          경북대학교 (자퇴)
          <br />
        </p>
      </div>
      <span className={styles.logo}>
        <Svg />
      </span>
      <div className={styles.circle}></div>
    </section>
  );
};

export default About;
