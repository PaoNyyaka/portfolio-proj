import React from 'react';
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'
import { handleEmailClick } from '../Hero/MailBtn';

export const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.text}>
                <h2 >Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
                    <a href="mailto: myemail@email.com" onClick={handleEmailClick}>paonyao5@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img className={styles.telegram} src={getImageUrl('contact/telegramIcon.png')} alt="Telegram icon" />
                    <a href="https://t.me/PaoNyyaka">https://t.me/PaoNyyaka</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
                    <a href="https://github.com/PaoNyyaka">https://github.com/PaoNyyaka</a>
                </li>
            </ul>
        </footer>
    )
}