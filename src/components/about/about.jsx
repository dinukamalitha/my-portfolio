import {getImageUrl} from "../../utils.js";
import styles from "./about.module.css";


export const About = () =>{
    return(
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("react.svg")}
                    alt=""
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("react.svg")}/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developper</h3>
                            <p>I'm a Frontend Developper</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("react.svg")}/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developper</h3>
                            <p>I'm a Backend Developper</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("react.svg")}/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Design</h3>
                            <p>I'm a UI Designer </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}