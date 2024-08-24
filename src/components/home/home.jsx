// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import {getImageUrl} from "../../utils.js";
import styles from "./home.module.css";
import Button from "@mui/material/Button";
import { ReactTyped } from "react-typed";

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
                    I'm a full-stack software developer and currently a second year IT Undergraduate at University of Moratuwa.
                </p>

                <Button variant="contained" href="mailto:dinukamalitha2001@gmail.com" sx={{borderRadius: '25px', padding: '10px 20px'}}>Contact Me</Button>
            </div>

            <img src={getImageUrl("profile.png")} alt="profile" className={styles.profileImg}/>

            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};