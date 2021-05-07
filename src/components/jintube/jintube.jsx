import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./jintube.module.css";
import firstVideo from "./jintube1.webm";
import secondVideo from "./jintube2.webm";
import thirdVideo from "./jintube3.webm";
import fourthVideo from "./jintube4.webm";

const Jintube = ({ Cursor, NavBtn }) => {
  return (
    <article className={styles.wrap}>
      <NavBtn />
      <Cursor />

      <section>
        <header className={styles.header}>
          <div className={styles.bg}>
            <img
              src="./image/jintube/bg.jpg"
              alt=""
              className={styles.bg_img}
            />
          </div>
          <div className={styles.project_info_wrap}>
            <div className={styles.project_info_div}>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Project -</h6>
                <h5 className={styles.project_desc}>Jintube</h5>
              </div>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Type -</h6>
                <h5 className={styles.project_desc}>Youtube Web Clone</h5>
              </div>
              <div className={styles.project_info}>
                <div className={styles.project_info}>
                  <h6 className={styles.project_title}>Role -</h6>
                  <h5 className={styles.project_desc}>development</h5>
                </div>
              </div>
            </div>
            <div className={styles.view_live_wrap}>
              <a
                target="_blank"
                href="https://6066e0e1c54c8d489abd1669--jintube.netlify.app/"
                rel="noreferrer"
                className={styles.view_live_nav}
              >
                <button className={styles.view_btn}>View Live</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/jinpark0625/react_jintube"
                rel="noreferrer"
                className={styles.view_live_nav}
              >
                <button className={`${styles.view_btn} ${styles.git}`}>
                  View Github
                </button>
              </a>
            </div>
          </div>
        </header>

        <section className={styles.project_dec}>
          <div className={styles.project_dec_text_wrap}>
            <h5 className={styles.project_dec_title}>Review</h5>
            <p className={styles.project_dec_text}>
              본 프로젝트는 React를 이용하여, 추천영상, 검색, 동영상 재생 등의
              페이지로 구성되어 있는 Web Aplication Project 입니다. Youtube
              Api를 통해서 사용자가 원하는 영상을 직접 찾을수있으며, 유튜브에서
              현재 추천하는 20개의 영상을 메인화면에서 실시간으로 추천하는것을
              구현하였습니다.
            </p>
          </div>
          <div className={styles.view_live_wrap_m}>
            <a
              target="_blank"
              href="https://6066e0e1c54c8d489abd1669--jintube.netlify.app/"
              rel="noreferrer"
              className={styles.view_live_nav}
            >
              <button className={styles.view_btn}>View Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/jinpark0625/react_jintube"
              rel="noreferrer"
              className={styles.view_live_nav}
            >
              <button className={`${styles.view_btn} ${styles.git}`}>
                View Github
              </button>
            </a>
          </div>
        </section>

        <main className={styles.project_detail}>
          <div className={styles.project_detail_wrap}>
            <div className={styles.project_detail_desktop_wrap}>
              <div className={styles.project_detail_desktop_browser_wrap}>
                <div className={styles.browser_content}>
                  <video className={styles.project_img} autoPlay loop muted>
                    <source src={firstVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className={styles.project_detail_mobile_wrap}>
              <div className={styles.project_detail_mobile_des}>
                <div className={styles.project_detail_mobile_text_wrap}>
                  <div className={styles.project_detail_mobile_text}>
                    <h5 className={`${styles.project_title} ${styles.red}`}>
                      Responsive
                    </h5>
                    <p className={`${styles.project_desc_m} ${styles.black}`}>
                      웹 크기에 맞추어, 동영상 우측 또는 하단에 추천동영상을
                      배치하여, 사용자가 언제든지 다른 추천영상을 볼수있도록
                      구현하였습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.project_detail_tablet}>
                <div className={styles.project_detail_tablet_mv}>
                  <video className={styles.project_img} autoPlay loop muted>
                    <source src={thirdVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className={styles.project_detail_desktop_wrap}>
              <div className={styles.project_detail_desktop_browser_wrap}>
                <div className={styles.browser_content}>
                  <video className={styles.project_img} autoPlay loop muted>
                    <source src={secondVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.project_detail_mobile_wrap} ${styles.second}`}
          >
            <div className={styles.project_detail_mobile}>
              <div className={styles.project_detail_mobile_mv}>
                <video className={styles.project_img} autoPlay loop muted>
                  <source src={fourthVideo} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className={styles.project_detail_tablet_des}>
              <div className={styles.project_detail_mobile_text_wrap}>
                <div className={styles.project_detail_mobile_text}>
                  <h5 className={`${styles.project_title} ${styles.red}`}>
                    Responsive
                  </h5>
                  <p className={`${styles.project_desc_m} ${styles.black}`}>
                    모바일에서도 손쉽게 영상을 검색하고, 재생할수있도록
                    구현했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footer_img}>
            <div className={styles.grad_next}></div>
            <img
              src="./image/logo.svg"
              alt="logo"
              className={styles.footer_next_img}
            />
          </div>
          <NavLink to="/todo" className={styles.next}>
            <div className={styles.footer_btn}>
              <p className={styles.footer_p}>
                <span className={styles.dash}></span> Next Project
              </p>
              <p className={styles.footer_next}>Not To-do List</p>
            </div>
          </NavLink>
        </footer>
      </section>
    </article>
  );
};

export default Jintube;
