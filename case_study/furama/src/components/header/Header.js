import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <header style={{marginBottom: "2%"}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <h4><span  style={{color: "white"}}>The Paladin</span></h4>
                        <a className="navbar-brand" href="#">
                            <img src="https://themewagon.github.io/palatin/img/core-img/favicon.ico" alt="Logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" to="/"
                                       style={{color: "white", fontFamily:"Tahoma", fontSize: "medium"}}>Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/service"
                                       style={{color: "white", fontFamily:"Tahoma", fontSize: "medium"}}>Phòng &amp; Giá</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customer"
                                       style={{color: "white", fontFamily:"Tahoma", fontSize: "medium"}}>Khách hàng</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contract"
                                       style={{color: "white", fontFamily:"Tahoma", fontSize: "medium"}}>Hợp đồng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;