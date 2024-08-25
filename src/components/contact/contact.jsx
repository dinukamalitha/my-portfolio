import {getImageUrl} from "../../utils.js";
import styles from "./contact.module.css";
export const Contact = ()=>{
    return(
        <footer id="contacts" className={styles.container}>
            <div className={styles.text}>
                <h2>Contacts</h2>
                <p>Feel free to reach out me!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("email.png")} alt="email"/>
                    <a href="">dinukamalitha2001@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("email.png")} alt="email"/>
                    <a href="">dinukamalitha2001@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("email.png")} alt="email"/>
                    <a href="">dinukamalitha2001@gmail.com</a>
                </li>
            </ul>
        </footer>
    );
}