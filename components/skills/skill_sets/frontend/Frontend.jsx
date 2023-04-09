import React from "react";
import styles from '../skill_set.module.css'

const Frontend = (props)=>{
    return (
        <div className={`${styles.skills_container} ${props.classname}`} id={props.id}>
            <h3 className={`${styles.skills_title} ${props.classname}`}>Frontend Developer</h3>
            <div className={`${styles.skills_items} ${props.classname}`}>
                <div className={`${styles.skills_item} ${props.classname}`} id="a">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>HTML</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Basic</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="b">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>CSS</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Basic</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="3">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>Javascript</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Basic</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="4">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>React</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Basic</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="3">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>GIT</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Basic</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="4">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>Nodejs</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Basic</span>
                </div>

            </div>
        </div>
    )
}

export default Frontend;
