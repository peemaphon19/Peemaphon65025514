import React from "react";
import styles from "./Hero.module.css";
import { FaGithubAlt , FaLinkedinIn, FaFacebookF,  FaSquareXTwitter  } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hello everyone for coming to watch!</p>
            <h3 className={styles.text_2}>Mr.Peemaphon Wiangin</h3>
            <p className={styles.text_3}>
                          <span>I am a </span>
                          <TypeAnimation
                                  sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'full stack',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Webdevloper',
                                    1000,
                                  ]}
                                  speed={50}
                                  style={{ fontSize: '1em', display: 'inline-block' }}
                                  repeat={Infinity}
                                />                   
              </p>
            <p className={styles.text_4}>
            "Please contact through the online channels below."
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="">
                <FaGithubAlt />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="">
                <FaSquareXTwitter />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              <div className={styles.hero_image}></div>
              </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;