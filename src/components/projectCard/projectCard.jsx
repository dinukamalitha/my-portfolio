import { getImageUrl } from "../../utils.js";
import Button from "@mui/material/Button";
import React from "react";
import styles from "./projectCard.module.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import {useMediaQuery} from "@mui/material";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <Card sx={{ maxWidth: 375, minHeight: 600 }}>
            <CardMedia
                sx={{ minHeight:300 }}
                image={getImageUrl(imageSrc)}
                alt={`image of ${title}`}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom  variant={isSmallScreen ? 'h6' : 'h5'} component="div">
                    {title}
                </Typography>
                <Typography variant={isSmallScreen ? 'body2' : 'body1'} color="text.secondary">
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