import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sticky.module.css";
import firstVideo from "./sticky1.mp4";
import secondVideo from "./sticky2.mp4";
import thirdVideo from "./sticky3.mp4";
import fourthVideo from "./sticky4.mp4";

const Sticky = ({ Cursor, NavBtn }) => {
  return (
    <article className={styles.wrap}>
      <NavBtn />
      <Cursor />

      <section>
        <header className={styles.header}>
          <div className={styles.bg}>
            <img
              src="./image/sticky/bg.webp"
              alt=""
              className={styles.bg_img}
            />
          </div>
          <div className={styles.project_info_wrap}>
            <div className={styles.project_info_div}>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Project -</h6>
                <h5 className={styles.project_desc}>Sticky Monster Lab</h5>
              </div>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Type -</h6>
                <h5 className={styles.project_desc}>
                  Sticky Monster Lab Web Clone
                </h5>
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
                href="https://jinpark0625.github.io/stickyML/"
                rel="noreferrer"
                className={styles.view_live_nav}
              >
                <button className={styles.view_btn}>View Live</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/jinpark0625/stickyML"
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
              본 프로젝트는 Javascript 를 이용하여, 랜딩페이지, 어바웃 화면등의
              페이지로 구성되어 있는 Web Clone Project 입니다. 애니메이션,
              슬라이드 등으로 사용자에게 재미있는 경험을 줄수있도록 웹사이트를
              구현하였습니다.
            </p>
          </div>
          <div className={styles.view_live_wrap_m}>
            <a
              target="_blank"
              href="https://jinpark0625.github.io/stickyML/"
              rel="noreferrer"
              className={styles.view_live_nav}
            >
              <button className={styles.view_btn}>View Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/jinpark0625/stickyML"
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
                  <img
                    className={styles.project_img_m}
                    src="./image/sticky/sticky1.gif"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div className={styles.project_detail_mobile_wrap}>
              <div className={styles.project_detail_mobile_des}>
                <div className={styles.project_detail_mobile_text_wrap}>
                  <div className={styles.project_detail_mobile_text}>
                    <h5 className={`${styles.project_title} ${styles.purple}`}>
                      Responsive
                    </h5>
                    <p className={`${styles.project_desc_m} ${styles.black}`}>
                      웹크기에 맞추어, 태블릿에서는 PC에서와 비슷한 느낌으로
                      전체적인 레이아웃을 변경하여 작업하였습니다. 데스크탑 및
                      렙탑과 동일한 분위기로 레이아웃이 변경하도록 작업했습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.project_detail_tablet}>
                <div className={styles.project_detail_tablet_mv}>
                  <video className={styles.project_img} autoPlay loop muted>
                    <source src={thirdVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/sticky/sticky3.gif"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div className={styles.project_detail_desktop_wrap}>
              <div className={styles.project_detail_desktop_browser_wrap}>
                <div className={styles.browser_content}>
                  <video className={styles.project_img} autoPlay loop muted>
                    <source src={secondVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/sticky/sticky2.gif"
                    alt=""
                  ></img>
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
                <img
                  className={styles.project_img_m}
                  src="./image/sticky/sticky4.gif"
                  alt=""
                ></img>
              </div>
            </div>
            <div className={styles.project_detail_tablet_des}>
              <div className={styles.project_detail_mobile_text_wrap}>
                <div className={styles.project_detail_mobile_text}>
                  <h5 className={`${styles.project_title} ${styles.purple}`}>
                    Responsive
                  </h5>
                  <p className={`${styles.project_desc_m} ${styles.black}`}>
                    모바일에서도 동일한 환경과 작업을 수행할수있도록 레이아웃을
                    구성 하였습니다.
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
              src="./image/pokemon/bg.webp"
              alt="logo"
              className={styles.footer_next_img}
            />
          </div>
          <NavLink to="/pokemon" className={styles.next}>
            <div className={styles.footer_btn}>
              <p className={styles.footer_p}>
                <span className={styles.dash}></span> Next Project
              </p>
              <p className={styles.footer_next}>Pokemon Project</p>
            </div>
          </NavLink>
        </footer>
      </section>
    </article>
  );
};

export default Sticky;
