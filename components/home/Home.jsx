import React from 'react'
import Data from './Data'
import Social from './Social'
import ScrollDown from './ScrollDown'
import styles from './home.module.css'

const Home = () => {
    return (
        <section className={`${styles.home} section`} id='home'>
            <div className={`${styles.home_container} container grid`}>
                <div className={`${styles.home__content} grid`}>
                    <Social/>
                    <div className={styles.home__img}></div>
                    <Data/>

                </div>

                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home
