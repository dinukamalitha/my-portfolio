import { getImageUrl } from "../../utils.js";
import React from "react";
import styles from "./projectCard.module.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useMediaQuery } from "@mui/material";

export const ProjectCard = ({ project: { title, imageSrc, description, impact, skills }, onClick }) => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Card 
            onClick={onClick}
            sx={{ 
                maxWidth: 400, 
                minHeight: 550, 
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                color: 'var(--color-text)',
                borderRadius: '16px',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)'
                }
            }}
        >
            <CardMedia
                sx={{ height: 250 }}
                image={getImageUrl(imageSrc)}
                alt={`image of ${title}`}
                title={title}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant={isSmallScreen ? 'h6' : 'h5'} component="div" sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ color: 'var(--color-text-muted)', mb: 2, lineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {description}
                </Typography>

                <div className={styles.impactContainer}>
                    <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Impact
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 0.5 }}>
                        {impact}
                    </Typography>
                </div>

                <div className={styles.skillsContainer}>
                    {skills.slice(0, 3).map((skill, id) => (
                        <span key={id} className={styles.skillTag}>
                            {skill}
                        </span>
                    ))}
                    {skills.length > 3 && (
                        <span className={styles.moreSkills}>+{skills.length - 3} more</span>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};