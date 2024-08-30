// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./home.module.css";
import Button from "@mui/material/Button";
import { ReactTyped } from "react-typed";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faHackerrank, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const Home = () =>{
    return(
        <section id="home" className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm {""}
                    <span className={styles.typedText}>
                    <ReactTyped
                        strings={["Dinuka", "a Developper"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    </span>
                </h1>
                <p className={styles.description}>
                    I'm a full-stack software developer and currently a second year IT Undergraduate at University of
                    Moratuwa.
                    This is my official personal website to showcase my all works related to Full Stack Software
                    Development and Web Development.
                </p>

                <Button variant="contained" href="DINUKA MALITHA - CV.pdf" download="Resume.pdf"
                        sx={{borderRadius: '25px', padding: '10px 20px'}}>Download CV</Button>

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
            </div>

            <img src={getImageUrl("profile.png")} alt="profile" className={styles.profileImg}/>

            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};