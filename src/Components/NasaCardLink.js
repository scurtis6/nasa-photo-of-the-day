import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaCardLink(){
    const [cardData, setCardData] = useState([]);
    // const [cards, setCards] = useState([]);

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=WnSt7VaeYGB0Lbqegg2jxgDoN3p9eNbDCPAc714l`)
        .then(response => {
            console.log(response.data);
            setCardData(response.data);
        })
        .catch(err => {
            console.log('the data was not returned', err);
        });
    }, []);

    return(
        <div>
            {<NasaCard 
                title={cardData.title}
                img={cardData.hdurl}
                imgUrl={cardData.url}
                explanation={cardData.explanation}
                date={cardData.date}
                />}
        </div>
    );
}