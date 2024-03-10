import React, { useState } from 'react';
import projects from '../../data/projects.json'
import styles from './Projects.module.css'
import { ProjectCard } from './ProjectCard'
import { getImageUrl } from '../../utils'

export const Projects = () => {
    const projectsPerPage = 3;
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => prevIndex - 1);
    };

    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.imgContainer}>
                <div className={styles.projects}>
                    <div className={styles.btnLeft}>
                        <button
                            className={styles.btnLeftArrow}
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                        >
                            <img
                                src={getImageUrl('projects/arrow/left-arrow.png')}
                                className={styles.BtnLeftImg}
                                alt='arrow left'
                            />
                        </button>
                    </div>
                    <div className={styles.projectCards}>
                        {projects.slice(startIndex, startIndex + projectsPerPage).map((project, id) => (
                            <ProjectCard key={id} project={project} />
                        ))}
                    </div>
                    <div className={styles.btnRight}>
                        <button
                            className={styles.btnRightArrow}
                            onClick={handleNext}
                            disabled={startIndex + projectsPerPage >= projects.length}
                        >
                            <img
                                src={getImageUrl('projects/arrow/right-arrow.png')}
                                className={styles.BtnRightImg}
                                alt='arrow right'
                                />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.btnSmallContainer}>
                <div className={styles.btnLeft_small}>
                <button className={styles.btnLeftArrow}
                        onClick={handlePrev}
                        disabled={startIndex === 0}>
                    <img
                        src={getImageUrl('projects/arrow/left-arrow.png')}
                        className={styles.BtnLeftImg}
                        alt='arrow left'
                    />
                </button>
                </div>
                <div className={styles.btnRight_small}>
                <button
                 className={styles.btnRightArrow}
                 onClick={handleNext}
                 disabled={startIndex + projectsPerPage >= projects.length}
                 >
                    <img
                        src={getImageUrl('projects/arrow/right-arrow.png')}
                        className={styles.BtnRightImg}
                        alt='arrow right'
                    />
                </button>
                </div>
            </div>
        </section>
    );
};