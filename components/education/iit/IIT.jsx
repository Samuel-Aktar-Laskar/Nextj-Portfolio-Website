import React  from "react";
import styles from './iit.module.css'
const IIT = ()=>{
    return (
     <div className={styles.EducationInfoArea}>
        <i class="uil uil-university qualification_icon"></i>
        <div className={styles.details}>
            <h2 className={styles.iit_name}>IIT Guwahati</h2>
            <div className={styles.line}>
                <span className={styles.label}>Course :</span>
                <span className={styles.value}>B. Tech</span>
            </div>
            <div className={styles.line}>
                <span className={styles.label}>Banch &nbsp;:</span>
                <span className={styles.value}>Mechanical Engineering</span>
            </div>
            <div className={styles.line}>
                <span className={styles.label}>Year &nbsp;:</span>
                <span className={styles.value}>3rd</span>
            </div>
            <div className={styles.line}>
                <span className={styles.label}>CPI &nbsp;:</span>
                <span className={styles.value}>7.87</span>
            </div>
        </div>
        </div>
    )
}

export default IIT;
