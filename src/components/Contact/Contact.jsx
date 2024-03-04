import React from 'react';
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

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
                    <a href="mailto: myemail@email.com">meemail@email.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linked icon" />
                    <a href="https://www.linkedin.com/myname">https://www.linkedin.com/myname</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
                    <a href="https://github.com/PaoNyyaka">https://github.com/PaoNyyaka</a>
                </li>
            </ul>
        </footer>
    )
}