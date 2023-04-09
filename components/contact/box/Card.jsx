import React from 'react'
import styles from './card.module.css'

const Card = (props)=>{
    return (
        <div className={styles.area} onClick={props.onClick}>
            <Icon type = {props.type}/>
            <span className={styles.card_title}>{props.title}</span>
            <span className={styles.subtitle}>{props.subtitle}</span>
            
        </div>
    )
}

const Icon = (props) => {
    switch(props.type) {
        case 'email' : 
            return <i class={`bx bx-mail-send ${styles.icon}`}></i>
        case 'whatsapp' : 
            return <i class={`uil uil-whatsapp ${styles.icon}`}></i>
        case 'linkedin' :
            return <i class={`uil uil-linkedin ${styles.icon}`}></i>
        default: return <div></div>
    }
}

export default Card
