import achievements from "../../data/achievements.json";
import styles from "./achievements.module.css";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const Achievements = () => {
    return (
        <section id="achievements" className={styles.container}>
            <h2 className={styles.title}>Achievements</h2>
            <div className={styles.grid}>
                {achievements.map((achievement, id) => (
                    <div key={id} className={styles.card}>
                        <div className={styles.icon}>
                            <EmojiEventsIcon />
                        </div>
                        <h3 className={styles.cardTitle}>{achievement.title}</h3>
                        <p className={styles.meta}>{achievement.issuer} · {achievement.year}</p>
                        <p className={styles.description}>{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
