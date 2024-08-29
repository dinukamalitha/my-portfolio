import {getImageUrl} from "../../utils.js";
import styles from "./about.module.css";


export const About = () => {
    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about.jpg")}
                    alt=""
                    className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>A Highly Motivated and Passionate Tech enthusiast who always seeks for opportunities to improve knowledge and skills.
                                Currently studies as an IT Undergraduate at one of the leading universities in Sri Lanka focusing on developing my career
                                as an IT Professional in the future.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>A Highly Motivated and Passionate Tech enthusiast who always seeks for opportunities to improve knowledge
                                and skills. Currently studies as an IT Undergraduate at one of the leading universities in Sri Lanka
                                focusing on developing my career as an IT Professional in the future.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <p>I always believe, people always improve through mistakes and that types of learning style would help me
                                to build up a strong career. I am trying to share my knowledge with the colleagues.
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    );
}