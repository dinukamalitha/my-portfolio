import * as React from 'react';
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer>
            <div className={styles.waves} >
                <div className={styles.wave} id={styles.wave1}></div>
                <div className={styles.wave} id={styles.wave2}></div>
                <div className={styles.wave} id={styles.wave3}></div>
                <div className={styles.wave} id={styles.wave4}></div>

            </div>
            <ul className={styles.socialIcons}>
                <li>
                    <a href="https://facebook.com/dinuka.malitha.9">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dinuka-malitha/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dinukamalitha">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.hackerrank.com/dm2001">
                        <FontAwesomeIcon icon={faHackerrank}/>
                    </a>
                </li>
            </ul>

            <ul className={styles.menu}>
                <li>
                    <a href="#home">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a href="#tech stack">
                        Technologies
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contacts">
                        Contacts
                    </a>
                </li>
            </ul>

            <p>All Right Reserved &#169; 2024</p>
        </footer>
    );
};
