import React from "react";

const NasaCard = props => {
    return(
        <div className="nasa_card">
            <h2>Title: {props.title}</h2>
            <p>Date: {props.date}</p>
            <img className="image" src={props.img} alt="universe"></img>
            <p>{props.imgUrl}</p>
            <p>{props.explanation}</p>
            
        </div>
        
    )
}

export default NasaCard;