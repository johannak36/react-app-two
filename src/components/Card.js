import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
    <h3>{props.title}</h3>
    <img src={props.image} />
        <p>{props.text}</p>
    </div>
)

export default Card