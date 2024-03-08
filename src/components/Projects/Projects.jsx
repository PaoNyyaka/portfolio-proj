import React from 'react';
import projects from '../../data/projects.json'
import styles from './Projects.module.css'
import { ProjectCard } from './ProjectCard'
import { getImageUrl } from '../../utils'

export const Projects = () => {
    return (
        <section className={styles.container} id='projects'>
             <div className={styles.arrows}>
                <img src={getImageUrl('projects/arrow/left-arrow.png')} alt="arrow left" />
            </div>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                        return (
                            <ProjectCard key={id} project={project} />
                            );    
                    })
                }
            </div>
            <div className={styles.arrows}>
                <img src={getImageUrl('projects/arrow/right-arrow.png')} alt="arrow right" />
            </div>
        </section>
    )
}