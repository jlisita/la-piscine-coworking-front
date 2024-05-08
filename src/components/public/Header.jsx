import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <h1>Les coworkings de kings</h1>
            <nav>
                <ul>
                    <li><Link to="/">Page d'accueil</Link></li>
                    <li><Link to="/coworkings">Liste des coworkings</Link></li>
                    <li><Link to="/login">Se connecter</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;