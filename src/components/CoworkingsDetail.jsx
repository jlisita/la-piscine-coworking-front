import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const CoworkingsDetail = () => {


    const {id} = useParams();
    
    const[coworking, setCoworking] = useState([]);

    useEffect (() => {
        fetch("http://localhost:5001/api/coworkings/" + id, 
        { method: "GET",
      })
        .then((response) => {
        return response.json();
        })
        .then((coworkingData) => {
            setCoworking(coworkingData.data)
        });
    }, [])


    return (
        <section>
            {          
                !coworking ? <p>Coworkings en cours de chargement</p> :
                <article>
                    <h2>name: {coworking.name}</h2>
                    <p>superficie: {coworking.superficy}</p> 
                    <p>Prix : </p>
                    <ul>
                        <li>{coworking.price.day} e par jour</li>
                        <li>{coworking.price.hour} e par heure</li>
                        <li>{coworking.price.month} e par mois</li>
                    </ul>

                    <p>Adresse :</p>
                    <p>
                        {coworking.address.number} {coworking.address.street} {coworking.address.postCode} {coworking.address.city}
                    </p>
                </article>    
            } 
        </section>
    )
}

export default CoworkingsDetail;