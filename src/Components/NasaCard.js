import React from "react";
import {NasaCardContent} from "./Styles";
import {Image} from "./Styles";
import {Explanation} from "./Styles";
import {ExplanationH3} from "./Styles";
import {ExplanationP} from "./Styles";
import {NasaCardTitle} from "./Styles";

const NasaCard = props => {
    return(
        <NasaCardContent>
            <div className="top_content">
                <h1>Astronomy Picture of the Day</h1>
                <p>Select a new date: <input type='date' id='photoDate' min='1995-06-16' max='2019-12-11'></input>
                <p>Date: {props.date}</p>
                </p>
                <NasaCardTitle>Title: {props.title}</NasaCardTitle>
            </div>
        <div> 
            <a href={props.imgUrl} target="_blank" rel="noopener noreferrer">
                <Image onClick={() => props.imgUrl} className="image" title="Click to enlarge image" src={props.img} alt="universe"></Image>  
            </a>
        </div>
        <Explanation>
            <ExplanationH3>Image Explanation</ExplanationH3>
            <ExplanationP>{props.explanation}</ExplanationP>
        </Explanation>        
    </NasaCardContent>  
    )
}

export default NasaCard;