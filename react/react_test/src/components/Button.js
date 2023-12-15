import React, { useState } from 'react'
import styles from './Button.module.css'

export default function Button(probs){
    const[isOn,setIsOn] = useState(false);
    return(
        <div className={isOn?styles.isOn:styles.isOff} onClick={()=>{
            //alert("kick von Hannes in die Fresse")
            setIsOn(!isOn);
        }}>{probs.name} is {probs.age} years old and button is {isOn?"On":"Of"}</div>
    )
}