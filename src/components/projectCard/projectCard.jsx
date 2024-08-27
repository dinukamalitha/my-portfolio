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
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
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
            </CardContent>
            <CardActions>
                <Button size="small">View More</Button>
                <Button size="small">View Source</Button>
            </CardActions>
        </Card>
    );
};