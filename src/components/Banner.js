import React from 'react';
import styles from './Banner.module.css'
import BannerImage from '../images/banner.jpeg'
const Banner = () => {
    return (
        <div className={styles.container}>
        <img src={BannerImage} alt="banner" />
        <div className={styles.textContainer}>
        <h1>Hellow</h1>
        <p>We re Learning <span>React JS</span></p>
        </div>
            
        </div>
    );
};

export default Banner;