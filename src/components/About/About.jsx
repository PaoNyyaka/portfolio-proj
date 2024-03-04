import React from 'react';
import styles from './About.module.css'
import { getImageUrl } from '../../utils';

export default function  About() {
    return ( 
    <section className={styles.container} id='about'> {/* интересный момент, мы связали эту секцию с nav секцией About, т.к. тут указали ид, а там ссылка <a href="#about"> */}
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl('about/aboutImage.png')} 
            alt="Me sitting with a laptop" 
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl('about/cursorIcon.png')} 
                    alt="cursor icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frondtend Developer</h3>
                        <p>
                            i`m a frontend developer with experience in building resposive and optimizet sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl('about/serverIcon.png')} 
                    alt="server icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            i`m a frontend developer with experience in building resposive and optimizet sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl('about/uiIcon.png')} 
                    alt="ui icon" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frondtend Developer</h3>
                        <p>
                            i`m a frontend developer with experience in building resposive and optimizet sites
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    )
}