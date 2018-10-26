import React from 'react'
import './Card.css'

const CardMediumB = props => (
    <div className="CardMediumB">
    <h3>{props.title}</h3>
    <img src={props.image} />
        <p>{props.text}</p>
    </div>
)

export default CardMediumB