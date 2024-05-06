import { useEffect, useState } from 'react';

const AllCoworkingsList = () => {

    const[coworkings, setCoworkings] = useState([]);

    useEffect (() => {
        fetch("http://localhost:5001/api/coworkings", 
        { method: "GET",
      })
        .then((response) => {
        return response.json();
        })
        .then((coworkingsData) => {
            setCoworkings(coworkingsData.data)
        });
    }, [])


    return (
        <section>
            {          
                !coworkings ? <p>Coworking en cours de chargement</p> :
                coworkings.map((coworking) => {
                    return (
                        <article key = {coworking.id}>
                            <h2>name: {coworking.name}</h2> 
                        </article>    
                        );
                })
            } 
        </section>
    )
}

export default AllCoworkingsList;