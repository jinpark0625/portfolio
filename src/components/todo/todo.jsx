import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./todo.module.css";
import firstVideo from "./todo1.mp4";
import secondVideo from "./todo2.mp4";
import thirdVideo from "./todo3.mp4";

const Todo = ({ Cursor, NavBtn }) => {
  return (
    <article className={styles.wrap}>
      <NavBtn />
      <Cursor />

      <section>
        <header className={styles.header}>
          <div className={styles.bg}>
            <img
              src="./image/todo/todo.webp"
              alt=""
              className={styles.bg_img}
            />
          </div>
          <div className={styles.project_info_wrap}>
            <div className={styles.project_info_div}>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Project -</h6>
                <h5 className={styles.project_desc}>Not To-do list</h5>
              </div>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Type -</h6>
                <h5 className={styles.project_desc}>To-do list</h5>
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
                href="https://jinpark0625.github.io/not-to-do-list/"
                rel="noreferrer"
                className={styles.view_live_nav}
              >
                <button className={styles.view_btn}>View Live</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/jinpark0625/not-to-do-list"
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
              ??? ??????????????? Javascript, canvas??? ????????????, ????????? ??????, ?????? ???
              ??????, ????????? ??????, ????????? ?????? ?????? ???????????? ???????????? ?????? Web
              Aplication Project ?????????. Local Storage??? ???????????? ????????????
              ????????? ???????????? ??????, ?????? ??? ????????????????????? ?????????????????????. ??????,
              openweathermap Api??? ???????????? ???????????? ????????? ???????????? ???????????????
              ????????? ????????????????????? ?????????????????????.
            </p>
          </div>
          <div className={styles.view_live_wrap_m}>
            <a
              target="_blank"
              href="https://jinpark0625.github.io/not-to-do-list/"
              rel="noreferrer"
              className={styles.view_live_nav}
            >
              <button className={styles.view_btn}>View Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/jinpark0625/not-to-do-list"
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
                    playsinline
                  >
                    <source src={firstVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/todo/todo1.gif"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <div className={styles.project_detail_mobile_wrap}>
              <div className={styles.project_detail_mobile_des}>
                <div className={styles.project_detail_mobile_text_wrap}>
                  <div className={styles.project_detail_mobile_text}>
                    <h5 className={`${styles.project_title} ${styles.blue}`}>
                      Responsive
                    </h5>
                    <p className={`${styles.project_desc_m} ${styles.black}`}>
                      Canvas??? ???????????? ???????????? ????????? ???????????? ????????? ????????????
                      ??????????????? ????????? ?????????????????? ?????????????????????. ??????,
                      ????????? ??????????????? ?????? ????????? ?????? ????????? ?????????????????????.
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
                    playsinline
                  >
                    <source src={thirdVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/todo/todo3.gif"
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
                    playsinline
                  >
                    <source src={secondVideo} type="video/mp4" />
                  </video>
                  <img
                    className={styles.project_img_m}
                    src="./image/todo/todo2.gif"
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
                <img
                  src="./image/todo/todo_m.webp"
                  alt=""
                  className={styles.project_img_ongoing}
                />
              </div>
            </div>
            <div className={styles.project_detail_tablet_des}>
              <div className={styles.project_detail_mobile_text_wrap}>
                <div className={styles.project_detail_mobile_text}>
                  <h5 className={`${styles.project_title} ${styles.blue}`}>
                    Responsive
                  </h5>
                  <p className={`${styles.project_desc_m} ${styles.black}`}>
                    ??? project??? desktop ??? tablet?????? ?????????????????????
                    ?????????????????????.
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
              src="./image/jinflix/jinflix.webp"
              alt="logo"
              className={styles.footer_next_img}
            />
          </div>
          <NavLink to="/jinflix" className={styles.next}>
            <div className={styles.footer_btn}>
              <p className={styles.footer_p}>
                <span className={styles.dash}></span> Next Project
              </p>
              <p className={styles.footer_next}>Jinflix</p>
            </div>
          </NavLink>
        </footer>
      </section>
    </article>
  );
};

export default Todo;
