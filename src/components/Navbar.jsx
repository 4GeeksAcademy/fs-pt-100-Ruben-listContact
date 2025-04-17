import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3">
                <Link to="/" className="navbar-brand">
                </Link>
                <div className="ml-auto">
                    <Link to="/AddContacts">
                        <button className="btn btn-secondary "> 📜 Añadir contacto </button>
                    </Link>
                </div>
            </nav>
	);
};