import React, { useState } from 'react';
import projects from '../../data/projects.json'
import styles from './Projects.module.css'
import { ProjectCard } from './ProjectCard'
import { ButtonNavigator } from './BtnHook/Btn'

export const Projects = () => {
    const projectsPerPage = 5;
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
                    <div className={styles.projectCards}>
                        {projects.slice(startIndex, startIndex + projectsPerPage).map((project, id) => (
                            <ProjectCard key={id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.mainContainerBtn}>
                <ButtonNavigator
                        direction="left"
                        handleClick={handlePrev}
                        disabled={startIndex === 0}
                        text="<"
                    />


                <ButtonNavigator
                        direction="right"
                        handleClick={handleNext}
                        disabled={startIndex + projectsPerPage >= projects.length}
                        text=">"
                    />

            </div>
        </section>
    );
};