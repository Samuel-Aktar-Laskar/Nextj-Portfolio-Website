import React  from "react";
import styles from './kv.module.css'
import mainStyle from '../iit/iit.module.css'

const KV = ()=>{
    return (
     <div className={`${mainStyle.EducationInfoArea} ${styles.kvSpecial}`}>
        <i class="uil uil-bus-school qualification_icon"></i>
        <div className={styles.details}>
            <h2 className={styles.iit_name}>KV ONGC, Srikona</h2>
            <div className={styles.line}>
                <span className={styles.label}>Course :</span>
                <span className={styles.value}>Schooling</span>
            </div>
            <div className={styles.line}>
                <span className={styles.label}>Stream &nbsp;:</span>
                <span className={styles.value}>Science</span>
            </div>
            <div className={styles.line}>
                <span className={styles.label}>Passing Year:</span>
                <span className={styles.value}>2020</span>
            </div>
            <div className={styles.line}>
                <span className={styles.label}>Class 12 Marks :</span>
                <span className={styles.value}>93.4%</span>
            </div>
            <div className={styles.line}>
                <span className={styles.label}>Class 10 Marks :</span>
                <span className={styles.value}>88.4%</span>
            </div>
        </div>
        </div>
    )
}

export default KV;
