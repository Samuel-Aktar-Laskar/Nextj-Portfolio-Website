import React from "react";
import styles from '../skill_set.module.css'

const Languages = (props)=>{
    return (
        <div className={`${styles.skills_container} ${props.classname}`} id={props.id}>
            <h3 className={`${styles.skills_title} ${props.classname}`}>Programming Languages</h3>
            <div className={`${styles.skills_items} ${props.classname}`}>
                <div className={`${styles.skills_item} ${props.classname}`} id="a">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>C</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Intermediate</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="b">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>C++</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Intermediate</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="3">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>Java</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Intermediate</span>
                </div>
                <div className={`${styles.skills_item} ${props.classname}`} id="4">
                    <div className={`${styles.skills_title_container} ${props.classname}`}>
                    <i class='bx bx-badge-check'></i>
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>Kotlin</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Intermediate</span>
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
                    <h3 className={`${styles.skills_item_title} ${props.classname}`}>C#</h3>
                    </div>
                    <span className={`${styles.skills_subtitle} ${props.classname}`}>Basic</span>
                </div>

            </div>
        </div>
    )
}

export default Languages;
