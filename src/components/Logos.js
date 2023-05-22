import React from 'react';
import styles from './Logos.module.css'
import apple from '../images/apple.webp'
import sumsung from '../images/sumsung.png'
import xiaomi from '../images/xiaomi.webp'

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Supports Us ?</h3>
            <div>
            <img src={apple} alt="apple" />
            <img src={sumsung} alt="logo" />
            <img src={xiaomi} alt="logo" />
            </div>
        </div>
    );
};

export default Logos;