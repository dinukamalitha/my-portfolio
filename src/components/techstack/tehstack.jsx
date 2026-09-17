import technologies from "../../data/technologies.json";
import {getImageUrl} from "../../utils.js";
import styles from "./techstack.module.css";

const categories = [
    { label: "Front-End", key: "frontend" },
    { label: "Back-End", key: "backend" },
    { label: "DBMS & Deployment", key: "dbms" },
];

export const Techstack = () => {
    return (
        <section id="tech-stack" className={styles.container}>
            <h2 className={styles.title}>Tech Stack</h2>
            <div className={styles.grid}>
                {categories.map((category) => (
                    <div key={category.key} className={styles.categoryCard}>
                        <h3 className={styles.categoryTitle}>{category.label}</h3>
                        <div className={styles.technologiesCard}>
                            {technologies[category.key].map((technology, id) => (
                                <div key={id} className={styles.technology}>
                                    <div className={styles.technologyImgContainer}>
                                        <img src={getImageUrl(technology.imageSrc)} alt={technology.title}/>
                                    </div>
                                    <p>{technology.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}