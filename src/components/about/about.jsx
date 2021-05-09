import React from "react";
import styles from "./about.module.css";
import Svg from "../svg/svg";

const About = ({ Cursor, NavBtn }) => {
  return (
    <section className={styles.wrap}>
      <NavBtn />
      <Cursor />
      <div className={styles.about_wrap}>
        <div className={styles.img_wrap}>
          <img src="./image/1.gif" alt="" className={styles.img} />
        </div>
        <div className={styles.about}>
          <h6 className={styles.index}>About Me</h6>
          <h6 className={styles.title}>
            “안녕하세요,
            <br className={styles.space_m} /> 프론트엔드 개발자를 꿈꾸는
            박진입니다.”
          </h6>
          <div className={styles.me}>
            <p className={`${styles.text} ${styles.first_sentence}`}>
              우직하게 목표를 향해 지내온 하루하루가
              <br />
              쌓여 결국에는 그 꿈에 도달할 것이라 믿습니다.
              <br />
              고민 끝에 인사이트를 발견하고
              <br />
              <br /> 모두가 만족하는 해결책을 제시하는 일을 좋아합니다.
              <br />
              지난 2년 동안 그래픽 디자이너로 일을 하며
              <br />
              사람들의 공감을 얻는 창의적인 디자인을 만들었습니다.
            </p>
            <p className={`${styles.text} ${styles.second_sentence}`}>
              더 나아가 디지털 시대에 웹사이트를 통해 화면에 보이는 레이아웃과
              그림을
              <br className={styles.space} />
              효과적으로 배치하여 좀 더 사람들의 needs에 맞추어 다양한 해결책을
              낼 수<br className={styles.space} /> 있는 프론트엔드에 관심을
              가지게 되었고 지금은 개발자의 꿈을 꾸고 있습니다.
              <br />
              <br />
              <span className={styles.bold}>
                당신과 나를 위한, 모두가 만족하는
                <br />
                최적의 솔루션을 제공하는
                <br />
                통찰력과 창의력이 있는 개발자가 되겠습니다.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.experience}>
          <p className={styles.sub_title}>저는 이런 것을 다룰줄압니다.</p>
          <p className={`${styles.text} ${styles.line_height}`}>
            Html - Css - Javascript - React <br />
            Photoshop - Illustrator - Adobe Xd - Indesign - Premiere
          </p>
          <p className={`${styles.sub_title} ${styles.margin}`}>
            저는 이런 것을 배웠습니다.
          </p>
          <p className={`${styles.text} ${styles.line_height}`}>
            봄아카데미-프론트엔드 개발자 부트캠프 10기
            <br />
            Seneca College - Creative Advertising
            <br />
            경북대학교(자퇴)
          </p>
          <p className={`${styles.sub_title} ${styles.margin}`}>
            저는 이런 것에 경력이 있습니다.
          </p>
          <p className={`${styles.text} ${styles.line_height}`}>
            Tomato Project -
            <span className={styles.job}> Graphic Designer</span>
            <br />
            Hanmi Post - <span className={styles.job}>Graphic Designer</span>
            <br />
            Northern Esports Academy -{" "}
            <span className={styles.job}>Graphic Designer</span>
            <br />
            Cheum Tour - <span className={styles.job}>Graphic Designer</span>
            <br />
            Chicago City Sports - <span className={styles.job}>Internship</span>
          </p>
        </div>
      </div>
      <span className={styles.logo}>
        <Svg />
      </span>
    </section>
  );
};

export default About;
