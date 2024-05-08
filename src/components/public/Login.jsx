import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        const loginData = {
            username: username,
            password: password,
          };
      

        const json = JSON.stringify(loginData);

        fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        body: json,
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        }).then((response) => {
            if (response.status === 200) {
                navigate("/admin");
            } else {
              setMessage("Connexion refusée");
            }
          });
    }

    return (
        <>
            <p>Connexion</p>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Votre identifiant</label>
                    <input type="text" name="username" id="username"/>
                </div>
                <div>
                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </>
        
    )
}

export default Login;