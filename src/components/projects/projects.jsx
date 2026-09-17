import projects from "../../data/projects.json";
import { ProjectCard } from "../projectCard/projectCard.jsx";
import styles from "./projects.module.css";

export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}
