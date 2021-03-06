import React from 'react'
import './Card.css'

const CardSmall = props => (
    <div className="CardSmall">
    <h3>{props.title}</h3>
    <img src={props.image} />
        <p>{props.text}</p>
    </div>
)

export default CardSmall