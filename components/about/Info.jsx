import React from "react";
import styles from './about.module.css'

const Info = () => {
    return (
        <div className={`${styles.about__info} grid`}>
            <div className={styles.about__box}>
                <i class='bx bx-award'></i>
                <h3 className={styles.about__title}>Experience</h3>
                <span className={styles.about__subtitle}>1 Years Working</span>
            </div>
            <div className={styles.about__box}>
            <i class='bx bx-award'></i>
                <h3 className={styles.about__title}>Completed</h3>
                <span className={styles.about__subtitle}>48 + Projects</span>
            </div>
            <div className={styles.about__box}>
            <i class='bx bx-award'></i>
                <h3 className={styles.about__title}>Support</h3>
                <span className={styles.about__subtitle}>Online 24 x 7</span>
            </div>
        </div>
    )
}

export default Info
