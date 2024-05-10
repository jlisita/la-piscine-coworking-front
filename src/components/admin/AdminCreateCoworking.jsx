import { useVerifyToken } from "../../utils/authGuard";

const AdminCreateCoworking = () => {

    useVerifyToken();

    const handleCreateCoworking = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const priceHour = event.target.priceHour.value;
        const priceDay = event.target.priceDay.value;
        const priceMonth = event.target.priceMonth.value;
        const number = event.target.number.value;
        const street = event.target.street.value;
        const postCode = event.target.postCode.value;
        const city = event.target.city.value;
        const superficy = event.target.superficy.value;
        const capacity = event.target.capacity.value;

        const coworkingData = {
            name : name,
            price:  {
                hour: priceHour,
                day: priceDay,
                month: priceMonth
            },
            address: {
                number: number,
                street: street,
                postCode: postCode,
                city: city
            },
            superficy: superficy,
            capacity: capacity
        }

        const coworkingDataJson = JSON.stringify(coworkingData)
        
        
        fetch("http://localhost:5001/api/coworkings", 
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
            },
            body: coworkingDataJson,
            credentials: "include",
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Coworking créé", data);
        });
    };




    return (
        <>
            <h2>Créer un coworking</h2>
            <form onSubmit={handleCreateCoworking}>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" name = "name" id = "name" />
                </div>
                <div>
                    <label htmlFor="priceHour">Prix à l'heure</label>
                    <input type="text" name = "priceHour" id = "priceHour" />
                </div>
                <div>
                    <label htmlFor="priceDay">Prix au jour</label>
                    <input type="text" name = "priceDay" id = "priceDay" />
                </div>
                <div>
                    <label htmlFor="priceMonth">Prix au mois</label>
                    <input type="text" name = "priceMonth" id = "priceMonth" />
                </div>
                <div>
                    <label htmlFor="number">Numéro de rue</label>
                    <input type="number" name = "number" id = "number" />
                </div>
                <div>
                    <label htmlFor="street">Nom de la rue</label>
                    <input type="text" name = "street" id = "street" />
                </div>
                <div>
                    <label htmlFor="postCode">Code postal</label>
                    <input type="number" name = "postCode" id = "postCode" />
                </div>
                <div>
                    <label htmlFor="city">Ville</label>
                    <input type="text" name = "city" id = "city" />
                </div>
                <div>
                    <label htmlFor="superficy">Superficie</label>
                    <input type="number" name = "superficy" id = "superficy" />
                </div>
                <div>
                    <label htmlFor="capacity">Capacité</label>
                    <input type="text" name = "capacity" id = "capacity" />
                </div>
                <div>
                    <input type="submit" value = "creér"/>
                </div>
            </form>
        </>
    )
    
} 

export default AdminCreateCoworking;