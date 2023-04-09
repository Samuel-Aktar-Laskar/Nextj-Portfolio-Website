import React from "react";
import VerticalLine from "./VerticalLine";
import IIT from "./iit/IIT";
import KV from "./kv/KV";
import styles from './education.module.css'


const Education = ()=> {
    return (
        <section className={`${styles.about} section`} id="education">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle">My Education</span>
        <div className={styles.education_content}>
        
            <div className={styles.info1}>
                <IIT/>
            </div>
            <div className={styles.dotted_line}>
                <VerticalLine/>
            </div>
            <div className={styles.info2}>
                <KV/>
            </div>
        </div>
        
        </section>
    )
}

export default Education;
