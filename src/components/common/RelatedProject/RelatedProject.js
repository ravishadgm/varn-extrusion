import React from 'react';
import styles from './RelatedProject.module.scss';
import { HiArrowUpRight } from "react-icons/hi2";

const RelatedProject = ({ projects = [], buttonText = "All Projects", buttonLink = "/projects" }) => {
    return (
        <section className={styles.relatedProjects}>
            <h2>Related Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div className={styles.card} key={index}>
                        <img src={project.image} alt={project.title} className={styles.image} />
                        <h3 className={styles.title}>{project.title}</h3>
                        <p className={styles.location}>{project.location}</p>
                    </div>
                ))}
            </div>

            <div className={styles.buttonWrapper}>
                <a href={buttonLink} className={styles.buttonIsLight}>
                    <div className={styles.buttonText}>
                        {buttonText}
                        <HiArrowUpRight className={styles.arrowIcon} />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default RelatedProject;
