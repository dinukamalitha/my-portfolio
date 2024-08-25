import { getImageUrl } from "../../utils.js";
import Button from "@mui/material/Button";
import React from "react";
import styles from "./projectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`image of ${title}`} className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <Button variant="contained" href={demo} sx={{ borderRadius: '25px', padding: '2px 15px', fontSize:'10px'}}>
                    Demo
                </Button>
                <Button variant="contained" href={source} sx={{ borderRadius: '25px', padding: '2px 15px', fontSize:'10px'}}>
                    Source
                </Button>
            </div>
        </div>
    );
};
