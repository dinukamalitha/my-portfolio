import React from 'react';
import styles from './achievements.module.css';
import achievements from '../../data/achievements.json';
import { getImageUrl } from '../../utils';

export const Achievements = () => {
  return (
    <section id="achievements" className={styles.container}>
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.carousel}>
        {achievements.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src={item.imageSrc ? getImageUrl(item.imageSrc) : 'https://via.placeholder.com/400x300?text=Achievement'} 
                alt={item.event} 
                className={styles.image} 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=Achievement';
                }}
              />
            </div>
            <div className={styles.details}>
              <h3 className={styles.event}>{item.event}</h3>
              <p className={styles.organizer}>Organized by: {item.organizer}</p>
              <p className={styles.achievement}>{item.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
