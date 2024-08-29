import * as React from 'react';
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { getImageUrl } from "../../utils.js";

export const Footer = () => {
    const backgroundUrl = getImageUrl("footer/wave.png");
    return (
        <footer>
            <div className={styles.waves} style={{background: `url(${backgroundUrl})`}}>
                <div className={styles.wave} id={styles.wave1}></div>
                <div className={styles.wave} id={styles.wave2}></div>
                <div className={styles.wave} id={styles.wave3}></div>
                <div className={styles.wave} id={styles.wave4}></div>

            </div>
            <ul className={styles.socialIcons}>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faHackerrank}/>
                    </a>
                </li>
            </ul>

            <ul className={styles.menu}>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Technologies
                    </a>
                </li>
                <li>
                    <a href="#">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contacts
                    </a>
                </li>
            </ul>

            <p>All Right Reserved &#169; 2024</p>
        </footer>
    );
};
