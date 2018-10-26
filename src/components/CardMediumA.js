import React from 'react'
import './Card.css'

const CardMediumA = props => (
    <div className="CardMediumA">
    <h3>{props.title}</h3>
    <img src={props.image} />
        <p>{props.text}</p>
    </div>
)

export default CardMediumA