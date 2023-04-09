import React from "react";
import Card from "./box/Card";
import styles from './contact.module.css'

const Contact = ()=>{
    return (
        <section className="about section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <span className="section__subtitle">Contact me</span>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h4 className={styles.heading}>Talk to me</h4>
                    <Card type = 'email' title = 'Email' subtitle='samuellaskar3@gmail.com' onClick={
                        ()=>{
                            window.location.href = "mailto:samuellaskar3@gmail.com"
                        }
                    }/>
                    <Card type = 'whatsapp' title = 'Whatsapp' subtitle='+91 6003440420'
                        onClick = {
                            ()=>{
                                window.location.href = "whatsapp://send?phone=+916003440420"
                            }
                        }
                    />
                    <Card type = 'linkedin' title = 'Linkedin' subtitle='Samuel Aktar Laskar'
                        onClick = {
                            ()=>{
                                window.open( 
                                "https://www.linkedin.com/in/samuel-aktar-laskar-4a0b001b8/")
                            }
                        }
                    />

                </div>
                <div className={styles.right}>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact;
