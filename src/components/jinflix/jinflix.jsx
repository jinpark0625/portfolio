import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./jinflix.module.css";
import firstVideo from "./jinflix1.mp4";
import secondVideo from "./jinflix2.mp4";
import thirdVideo from "./jinflix3.mp4";
import fourthVideo from "./jinflix4.mp4";

const Jinflix = ({ Cursor, NavBtn }) => {
  return (
    <article className={styles.wrap}>
      <NavBtn />
      <Cursor />

      <section>
        <header className={styles.header}>
          <div className={styles.bg}>
            <img
              src="./image/jinflix/bg.webp"
              alt=""
              className={styles.bg_img}
            />
          </div>
          <div className={styles.project_info_wrap}>
            <div className={styles.project_info_div}>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Project -</h6>
                <h5 className={styles.project_desc}>Jinflix</h5>
              </div>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Type -</h6>
                <h5 className={styles.project_desc}>Netflix Web Clone</h5>
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
                href="
              https://jinpark0625.github.io/Jinflix/"
                rel="noreferrer"
                className={styles.view_live_nav}
              >
                <button className={styles.view_btn}>View Live</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/jinpark0625/Jinflix"
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
              본 프로젝트는 Javascript 를 이용하여, 랜딩페이지, 로그인폼,
              로그인화면 등의 페이지로 구성되어 있는 Web Clone Project 입니다.
              로그인 페이지에서,사용자의 E-mail, 비밀번호 입력 조건을 알수있도록
              구현하였습니다.
            </p>
          </div>
          <div className={styles.view_live_wrap_m}>
            <a
              target="_blank"
              href="
              https://jinpark0625.github.io/Jinflix/"
              rel="noreferrer"
              className={styles.view_live_nav}
            >
              <button className={styles.view_btn}>View Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/jinpark0625/Jinflix"
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
                  <video
                    className={styles.project_img}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={firstVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/jinflix/jinflix1.gif"
                    alt=""
                  ></img>
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
                      웹 크기에 맞추어, 사용자가 편히 서비스를 이용할수있도록
                      반응형으로 구현하였습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.project_detail_tablet}>
                <div className={styles.project_detail_tablet_mv}>
                  <video
                    className={styles.project_img}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={thirdVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/jinflix/jinflix3.gif"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div className={styles.project_detail_desktop_wrap}>
              <div className={styles.project_detail_desktop_browser_wrap}>
                <div className={styles.browser_content}>
                  <video
                    className={styles.project_img}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={secondVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/jinflix/jinflix2.gif"
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
                <video
                  className={styles.project_img}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={fourthVideo} type="video/mp4" />
                </video>
                <img
                  className={styles.project_img_m}
                  src="./image/jinflix/jinflix4.gif"
                  alt=""
                ></img>
              </div>
            </div>
            <div className={styles.project_detail_tablet_des}>
              <div className={styles.project_detail_mobile_text_wrap}>
                <div className={styles.project_detail_mobile_text}>
                  <h5 className={`${styles.project_title} ${styles.red}`}>
                    Responsive
                  </h5>
                  <p className={`${styles.project_desc_m} ${styles.black}`}>
                    모바일에서도 손쉽게 서비스를 이용할수있도록 구현하였습니다.
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
              src="./image/skt/skt.webp"
              alt="logo"
              className={styles.footer_next_img}
            />
          </div>
          <NavLink to="/skt" className={styles.next}>
            <div className={styles.footer_btn}>
              <p className={styles.footer_p}>
                <span className={styles.dash}></span> Next Project
              </p>
              <p className={styles.footer_next}>SKT AI</p>
            </div>
          </NavLink>
        </footer>
      </section>
    </article>
  );
};

export default Jinflix;
