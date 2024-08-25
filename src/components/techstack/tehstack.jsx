import technologies from "../../data/technologies.json";
import  experiences from "../../data/expeiences.json";
import {getImageUrl} from "../../utils.js";
import styles from "./techstack.module.css";

export const Techstack = () => {
    return (
        <section id="tech stack" className={styles.container}>
            <h2 className={styles.title}>Tech Stack</h2>
            <div className={styles.content}>
                <div className={styles.technologies}>
                    {technologies.map((technology, id) => {
                        return (
                            <div key={id} className={styles.technology}>
                                <div className={styles.technologyImgContainer}>
                                    <img src={getImageUrl(technology.imageSrc)} alt={technology.title}/>
                                </div>
                                <p>{technology.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.experiences}>
                    {experiences.map((experience,id)=> {
                        return(
                            <li key={id} className={styles.experienceItem}>
                                <img
                                    src={getImageUrl(experience.imageSrc)}
                                    alt={`${experience.organisation} logo`}
                                />
                                <div className={styles.experienceDetails}>
                                    <h3>{`${experience.role}`}, {`${experience.organisation}`}</h3>
                                    <p>{`${experience.startDate}`} - {`${experience.endDate}`}</p>
                                    <ul>
                                        {experience.workExperiences.map((workExperience,id) =>{
                                            return <li key={id}>{workExperience}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}