import projects from "../../data/projects.json";
import * as React from "react";
import { ProjectCard } from "../projectCard/projectCard.jsx";
import styles from "./projects.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {Autoplay, EffectCoverflow, Pagination} from 'swiper/modules';

export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 250,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    // autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className={styles.mySwiper}
                    breakpoints={{
                        830: {
                            effect: 'coverflow',
                            slidesPerView: 3
                        },
                        0: {
                            effect: 'slide',
                            slidesPerView: 1
                        },
                    }}
                >
                    {projects.map((project, id) => (
                        <SwiperSlide key={id} className={styles.swiperSlide}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}