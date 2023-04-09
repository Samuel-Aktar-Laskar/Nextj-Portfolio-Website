import React from 'react'
import styles from './skills.module.css'
import Frontend from './skill_sets/frontend/Frontend'
import Backend from './skill_sets/backend/Backend'
import Android from './skill_sets/android/Android'
import Languages from './skill_sets/programming_languages/Languages'

const Skills = ()=>{
    return (
        <section className={`section skills`} id='skills'>
            <h2 className='section__title'>Skills</h2>
            <span className="section__subtitle">My Skills</span>
            <div className={styles.skills_info}>
                <Frontend  classname={styles.frontend_item}/>
                <Backend classname={styles.backend_item}/>
                <Android classname = {styles.android}/>
                <Languages classname={styles.languages}/>
            </div>
            
        </section>
    )
}

export default Skills
