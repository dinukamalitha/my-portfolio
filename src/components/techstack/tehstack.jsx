import technologies from "../../data/technologies.json";
import {getImageUrl} from "../../utils.js";
import styles from "./techstack.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";

export const Techstack = () => {
    return (
        <section id="tech stack" className={styles.container}>
            <h2 className={styles.title}>Tech Stack</h2>
            <Box sx={{ flexGrow: 1, marginTop: '25px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Typography variant="h5" sx={{textAlign:'center', color: 'white'}} gutterBottom>
                            Front-End
                        </Typography>
                        <div className={styles.technologiesCard}>
                            {technologies.frontend.map((technology, id) => {
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
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" sx={{textAlign:'center', color: 'white'}} gutterBottom>
                            Back-End
                        </Typography>
                        <div className={styles.technologiesCard}>
                            {technologies.backend.map((technology, id) => {
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
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" sx={{textAlign:'center', color: 'white'}} gutterBottom>
                            DBMS & Deployment
                        </Typography>
                        <div className={styles.technologiesCard}>
                            {technologies.dbms.map((technology, id) => {
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
                    </Grid>
                </Grid>
            </Box>

        </section>
    );
}