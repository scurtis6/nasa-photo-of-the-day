import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaCardLink(){
    const [cardData, setCardData] = useState([]);
    const [changeDate, setChangeDate] = useState('2019-12-12')

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${changeDate}`)
        .then(response => {
            console.log(response.data);
            setCardData(response.data);
        })
        .catch(err => {
            console.log('the data was not returned', err);
        });
    }, [changeDate]);

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