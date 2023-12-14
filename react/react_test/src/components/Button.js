import React from 'react'
import styles from './Button.module.css'

export default function Button(probs){
    return(
        <div className={styles.main} onClick={()=>{
            alert("kick von Hannes in die Fresse")
        }}>{probs.name} is {probs.age} years old </div>
    )
}