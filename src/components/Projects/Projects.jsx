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
                    <div className={`${styles.btnLeft} ${styles.btnSpan} ${styles.btnHide}`}>
                        <button
                            onClick={handlePrev}
                            disabled={startIndex === 0}
                        >Нажми влево
                        </button>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.projectCards}>
                        {projects.slice(startIndex, startIndex + projectsPerPage).map((project, id) => (
                            <ProjectCard key={id} project={project} />
                        ))}
                    </div>
                    <div className={`${styles.btnRight} ${styles.btnSpan} ${styles.btnHide}`}>
                        <button
                            onClick={handleNext}
                            disabled={startIndex + projectsPerPage >= projects.length}
                        >Нажми вправо
{/*                             <img
                                src={getImageUrl('projects/arrow/right-arrow.png')}
                                className={styles.BtnRightImg}
                                alt='arrow right'
                                /> */}
                        </button>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={styles.mainContainerBtn}>
                <div className={`${styles.btnLeft} ${styles.btnSpan}`}>
                    <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                    >Нажми влево
                    </button>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${styles.btnRight} ${styles.btnSpan}`}>
                    <button
                        onClick={handleNext}
                        disabled={startIndex + projectsPerPage >= projects.length}
                    >Нажми вправо
                    </button>
                </div>
            </div>
        </section>
    );
};