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
              ??? ??????????????? Javascript ??? ????????????, ???????????????, ????????? ????????????
              ???????????? ???????????? ?????? Web Clone Project ?????????. ???????????????,
              ???????????? ????????? ??????????????? ???????????? ????????? ??????????????? ???????????????
              ?????????????????????.
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
                      ???????????? ?????????, ?????????????????? PC????????? ????????? ????????????
                      ???????????? ??????????????? ???????????? ?????????????????????. ???????????? ???
                      ????????? ????????? ???????????? ??????????????? ??????????????? ??????????????????.
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
                    src="./image/sticky/sticky3.gif"
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
                    ?????????????????? ????????? ????????? ????????? ????????????????????? ???????????????
                    ?????? ???????????????.
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
