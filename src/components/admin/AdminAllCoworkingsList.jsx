import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const AllCoworkingsList = () => {

    const[coworkings, setCoworkings] = useState([]);

    const [needsRefresh, setNeedRefresh] = useState(false);

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
    }, [needsRefresh])

    const handleDeleteCoworking = (event, coworkingId) => {
        fetch("http://localhost:5001/api/coworkings/" + coworkingId, {
          method: "DELETE",
          credentials: "include",
        }).then((response) => {
          setNeedRefresh(!needsRefresh);
        });
      };


    return (
        <section>
            {          
                !coworkings ? <p>Coworking en cours de chargement</p> :
                coworkings.map((coworking) => {
                    return (
                        <article key = {coworking.id}>
                            <h2>name: {coworking.name}</h2> 
                            <button onClick={(event) => handleDeleteCoworking(event, coworking.id)}>Supprimer</button>
                            <Link to={`/coworkings/details/${coworking.id}`}>Voir le détail du coworking</Link>
                        </article>    
                        );
                })
            } 
        </section>
    )
}

export default AllCoworkingsList;