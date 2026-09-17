import experiences from "../../data/experiences.json";
import styles from "./experience.module.css";

export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, id) => (
                    <div key={id} className={styles.entry}>
                        <div className={styles.entryHeader}>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <span className={styles.dates}>{exp.startDate} – {exp.endDate}</span>
                        </div>
                        <p className={styles.organisation}>{exp.organisation}</p>
                        <ul className={styles.responsibilities}>
                            {exp.responsibilities.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
