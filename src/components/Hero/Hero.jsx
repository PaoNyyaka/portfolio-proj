import React from 'react';
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';

export default function Hero() {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, i`m Andrew
            </h1>
            <p className={styles.description}>
                I`m a frontend developer with 3 years of experience using JavaScript/TypeScrypt, React and NodeJS.
                Reach out if you`d like to learn more!
            </p>
            <a href="mailtp:myemail@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt=" Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    )
};