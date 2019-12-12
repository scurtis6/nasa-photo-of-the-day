import React from "react";

const NasaCard = props => {
    return(
        <div className="nasa_card">
        <h1>Astronomy Picture of the Day</h1>
        <div className="top_content">
            <h2>Title: {props.title}</h2>
            <p>Date: {props.date}</p>
            <p>Select a new date: <input type='date' id='photoDate' min='1995-06-16' max='2019-12-11'></input></p>
        </div>
        <div className="image_content">
            <a href={props.imgUrl} target="_blank" rel="noopener noreferrer">
                <img onClick={() => props.imgUrl} className="image" title="Click to enlarge image" src={props.img} alt="universe"></img>  
            </a>
        </div>
        <div className="explanation">
            <h3>Image Explanation</h3>
            <p>{props.explanation}</p>
        </div>        
    </div>  
    )
}

export default NasaCard;