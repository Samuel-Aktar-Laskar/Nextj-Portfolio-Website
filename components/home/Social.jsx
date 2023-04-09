import React from 'react'
import styles from './home.module.css'

const Social = () => {
    return (
        <div className={styles.home__social}>
            <a href="https://www.github.com/Samuel-Aktar-Laskar" className={styles.home__social_icon} target="_blank" rel="noreferrer noopener">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/samuel-aktar-laskar-4a0b001b8/"
	    className={styles.home__social_icon} target="_blank" rel="noreferrer noopener">
                <i className="uil uil-linkedin-alt" ></i>
            </a>
            <a href="https://www.github.com/Samuel-Aktar-Laskar"
             className={styles.home__social_icon} target="_blank" rel="noreferrer noopener">
                <i className = "uil uil-github-alt"></i>
            </a>


        </div>
    )
}

export default Social
