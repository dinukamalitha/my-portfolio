import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer>
            <ul className={styles.socialIcons}>
                <li>
                    <a href="https://facebook.com/dinuka.malitha.9">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dinuka-malitha/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/dinukamalitha">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.hackerrank.com/dm2001">
                        <FontAwesomeIcon icon={faHackerrank} />
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
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#achievments">
                        Achievements
                    </a>
                </li>
                <li>
                    <a href="#contacts">
                        Contacts
                    </a>
                </li>
            </ul>

            <p className={styles.text}>All Right Reserved &#169; 2026</p>
        </footer>
    );
};
