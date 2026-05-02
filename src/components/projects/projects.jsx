import projects from "../../data/projects.json";
import * as React from "react";
import { ProjectCard } from "../projectCard/projectCard.jsx";
import styles from "./projects.module.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getImageUrl } from "../../utils.js";

export const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>

            {/* Grid Container */}
            <div className={styles.projectsGrid}>
                {projects.map((project, id) => (
                    <ProjectCard
                        key={id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* Unique Project Popup */}
            <Dialog
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-text)',
                        borderRadius: '20px',
                        padding: '10px'
                    }
                }}
            >
                {selectedProject && (
                    <>
                        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                {selectedProject.title}
                            </Typography>
                            <IconButton onClick={() => setSelectedProject(null)} sx={{ color: 'var(--color-text)' }}>
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers sx={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                            <div className={styles.modalContent}>
                                <img
                                    src={getImageUrl(selectedProject.imageSrc)}
                                    alt={selectedProject.title}
                                    className={styles.modalImage}
                                />
                                <div className={styles.modalDetails}>
                                    <Typography variant="h6" gutterBottom color="primary">Overview</Typography>
                                    <Typography variant="body1" paragraph>
                                        {selectedProject.detailedDescription}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom color="primary">Key Impact</Typography>
                                    <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
                                        {selectedProject.impact}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom color="primary">Tech Stack</Typography>
                                    <div className={styles.modalSkills}>
                                        {selectedProject.skills.map((skill, id) => (
                                            <span key={id} className={styles.modalSkill}>{skill}</span>
                                        ))}
                                    </div>

                                    <div className={styles.modalActions}>
                                        <Button variant="contained" href={selectedProject.demo} target="_blank">Live Demo</Button>
                                        <Button variant="outlined" href={selectedProject.source} target="_blank">View Source</Button>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </section>
    );
}

// {
//     "title": "e - Doctor",
//     "imageSrc": "projects/e-doctor.png",
//     "description": "This is a UI Design created for a medical application which facilitates channelling of doctors online.",
//     "impact": "Designed a telemedicine interface that reduced booking time by 50% in user testing.",
//     "detailedDescription": "A high-fidelity mockup for a futuristic telemedicine platform. The design emphasizes ease of use for elder patients and features integrated video consultation interfaces and health tracking dashboards.",
//     "skills": [
//       "Figma"
//     ],
//     "demo": "https://www.example.com",
//     "source": "https://www.figma.com/file/2v1HKDV2FoCpWKLy4M96RP/E-Doctor?node-id=0%3A1"
//   },