import { getImageUrl } from "../../utils.js";
import Button from "@mui/material/Button";
import React from "react";
import styles from "./projectCard.module.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return (
        <Card sx={{ maxWidth: 375 }}>
            <CardMedia
                sx={{ height: 400 }}
                image={getImageUrl(imageSrc)}
                alt={`image of ${title}`}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <li key={id} className={styles.skill}>
                                {skill}
                            </li>
                        );
                    })}
                </ul>
            </CardContent>
            <CardActions sx={{display: 'flex', flexDirection: 'row', justifyContent: ' center', marginBottom: '20px'}}>
                <Button size="small" href={source} variant="outlined">View Source</Button>
            </CardActions>
        </Card>
    );
};