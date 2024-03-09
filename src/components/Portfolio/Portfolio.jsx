import React from 'react';
import styles from './Portfolio.module.css';
import CountUp from 'react-countup'; // เปลี่ยนจาก countUp เป็น CountUp
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
          <div className={styles.port_items}>
              <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/431156405_1476312096249580_7367441586864751300_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHOBhiUSHpVKKUCkL-NCeRY4qogvDEBM4_iqiC8MQEzj-4n83sZaIvH1XM1A2IPErTwkDUvELhzfIZAOSfvQVai&_nc_ohc=qBkcj-Y-l5wAX_yir9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT0ShVSyfwJRQM3ulpxdaqvcA2tLUC0Xw-6kUh7o_rj-w&oe=6612D423' alt="" />
              <p>Cer web design.</p>
          </div>
        </Tilt>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
          <div className={styles.port_items}>
              <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/431186470_7523623194369067_8435056727229733564_n.png?stp=dst-png_s350x350&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEb1dRrzlCYJuK8fL5KS6LgjupWmfhNN0mO6laZ-E03SRSqynzoF5HkkDWrePiVYq4NVXL00M7bbFAuNGNOBAaK&_nc_ohc=_Wd5Vh5H2rgAX8OY9hp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQw0eO3wlvv-HMwuftdrBfBUvTyLoO7jJ-WgRTXUI4X9g&oe=6612EC5F" alt="" />
              <p>Design a travel app.</p>
          </div>
        </Tilt>  
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423766112_1194498275321729_7092958683385379255_n.png?stp=dst-png_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1NXk0_UsEA8B8VIINvfH75G3qULuj6VrkbepQu6PpWjF6uPK2gQU2owFOYdwHdm6dtqoN_MSkjcsEQG0-cbSC&_nc_ohc=EiCUawbJc3wAX-prffc&_nc_oc=AQmcFUGoHPs8D1dU5o7ZhZygDVXepdjr6eiAymV57eZVZrFbcsRWtm9c3jYu1YCxo-dVHpnfD6AiGkbp5qEcBdBk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSzs3DDe8Nfk7OIogAqXmT86IQq17Kqxq7052lOaDzNKA&oe=661351A0" alt="" />
            <p>Web dev.</p>
        </div>
        </Tilt> 
      </div>
    </div>
  );
}

export default Portfolio;
