// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import { getImageUrl } from "../../utils.js";
import styles from "./home.module.css";
import Button from "@mui/material/Button";
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faHackerrank, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
    return (
        <section id="home" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm {""}
                    <span className={styles.typedText}>
                        <ReactTyped
                            strings={["Dinuka", "a Software Engineer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </span>
                </h1>
                <p className={styles.description}>
                    A motivated and detail-oriented Software Engineering undergraduate with a strong academic record and a
                    solid grounding in modern full-stack development, always looking to grow my skills and take on new
                    opportunities in the software industry.
                </p>

                <Button
                    variant="contained"
                    href="/DINUKAMALITHA-CV.pdf"
                    download="Dinuka Malitha_Resume.pdf"
                    sx={{
                        borderRadius: '9999px',
                        padding: '10px 24px',
                        textTransform: 'none',
                        fontWeight: 500,
                        backgroundColor: 'var(--color-primary)',
                        boxShadow: '0 12px 30px rgba(var(--color-primary-rgb), 0.35)',
                        '&:hover': {
                            backgroundColor: 'var(--color-primary-dark)',
                            boxShadow: '0 16px 40px rgba(var(--color-primary-rgb), 0.5)',
                        }
                    }}
                >
                    Download CV
                </Button>

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
            </div>

            {/* <img src={getImageUrl("profile.png")} alt="profile" className={styles.profileImg} /> */}

            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};