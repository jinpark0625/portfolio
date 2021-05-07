import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./pokemon.module.css";
import firstVideo from "./pokemon1.webm";
import secondVideo from "./pokemon2.webm";
import thirdVideo from "./pokemon3.webm";

const Pokemon = ({ Cursor, NavBtn }) => {
  return (
    <article className={styles.wrap}>
      <NavBtn />
      <Cursor />

      <section>
        <header className={styles.header}>
          <div className={styles.bg}>
            <img
              src="./image/pokemon/bg4.jpg"
              alt=""
              className={styles.bg_img}
            />
          </div>
          <div className={styles.project_info_wrap}>
            <div className={styles.project_info_div}>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Project -</h6>
                <h5 className={styles.project_desc}>Pokemon Project</h5>
              </div>
              <div className={styles.project_info}>
                <h6 className={styles.project_title}>Type -</h6>
                <h5 className={styles.project_desc}>Pokemon game</h5>
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
                href="https://6075847585f083be93cf78dc--pokemon-trainer.netlify.app/"
                rel="noreferrer"
                className={styles.view_live_nav}
              >
                <button className={styles.view_btn}>View Live</button>
              </a>
              <a
                target="_blank"
                href="https://github.com/jinpark0625/pokemon"
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
              본 프로젝트는 React를 이용하여, 홈, 로그인, 포켓몬 게임, 트레이너
              등록 등의 페이지로 구성되어 있는 Web Aplication Project 입니다.
              firebase를 통해서 사용자가 google 과 github를 통해 로그인
              할수있으며, 사용자의 정보를 firebase에 realtime database에
              저장하여 실시간으로 등록 및 수정이 가능하도록 구현하였습니다. 또한
              cloudinary를 이용하여 사용자의 이미지를 저장을 할수있도록
              구현하였습니다. pokemon 게임에서는, pokeapi 에서 데이터를
              추출하여, 포켓몬, 포켓몬 번호, 이름 등의 정보가 담긴 DB를
              구축하였습니다. 이를 통하여 게임에서, 무작위로 나오는 포켓몬의
              정보와 포켓몬 게임을 즐길수있도록 구현하였습니다.
            </p>
          </div>
          <div className={styles.view_live_wrap_m}>
            <a
              target="_blank"
              href="https://6075847585f083be93cf78dc--pokemon-trainer.netlify.app/"
              rel="noreferrer"
              className={styles.view_live_nav}
            >
              <button className={styles.view_btn}>View Live</button>
            </a>
            <a
              target="_blank"
              href="https://github.com/jinpark0625/pokemon"
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
                    <h5 className={`${styles.project_title} ${styles.yellow}`}>
                      Responsive
                    </h5>
                    <p className={styles.project_desc_m}>
                      사용자가 원하는 이미지를 선택 할수있으며, 선택하지 않을시
                      기본으로 설정되어진 포켓몬이 등록되어집니다. 또한,
                      이미지의 이름이 사용자 프로필에도 등록되어지도록
                      구현했습니다.
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
                <img
                  src="./image/pokemon/poke_mobile.png"
                  alt=""
                  className={styles.project_img}
                />
              </div>
            </div>
            <div className={styles.project_detail_tablet_des}>
              <div className={styles.project_detail_mobile_text_wrap}>
                <div className={styles.project_detail_mobile_text}>
                  <h5 className={`${styles.project_title} ${styles.yellow}`}>
                    Responsive
                  </h5>
                  <p className={styles.project_desc_m}>
                    현재 모바일용은 준비중입니다. 현재 데스크탑 및 테블릿에서만
                    이용이 가능합니다. 또한, 최적화 및 google map Api를 이용한
                    포켓몬맵 구현을 개선중입니다.
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
              src="./image/jintube/logo.png"
              alt="logo"
              className={styles.footer_next_img}
            />
          </div>
          <NavLink to="/jintube" className={styles.next}>
            <div className={styles.footer_btn}>
              <p className={styles.footer_p}>
                <span className={styles.dash}></span> Next Project
              </p>
              <p className={styles.footer_next}>Jintube</p>
            </div>
          </NavLink>
        </footer>
      </section>
    </article>
  );
};

export default Pokemon;
