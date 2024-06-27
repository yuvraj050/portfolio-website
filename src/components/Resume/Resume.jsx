import React from 'react';
import styles from './Resume.module.css';

const Resume = () => (
  <section className={styles.container} id="resume">
    <h2 className={styles.title}>Resume</h2>
    <div className={styles.content}>
      
      <div className={styles.resumeDetails}>
        <p className={styles.description}>You can download my resume by clicking the button below:</p>
        <a href="/assets/resume/resume.pdf" download="Yuvraj-Resume.pdf" className={styles.btn} aria-label="Download my resume in PDF format">Download Resume</a>
      </div>
    </div>
  </section>
);

export default Resume;
