import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="header">
            <nav className="nav justify-content-around menu">
                <Link className="nav-link active" to="/masrafapp" ><i className="fa fa-home" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/masrafapp/harcama-ekle" ><i className="fa fa-plus-circle" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/masrafapp/kategoriler" ><i className="fa fa-list" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/masrafapp/hesaplar" ><i className="fa fa-credit-card" aria-hidden="true"></i></Link>
                <Link className="nav-link" to="/masrafapp/kullanici" ><i className="fa fa-user" aria-hidden="true"></i></Link>
            </nav>
        </div>
    )
}

export default Menu;