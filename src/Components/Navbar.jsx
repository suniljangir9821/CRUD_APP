
const Navbar = (props) => {
    


    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary shadow"
            data-bs-theme={props.mode === 'light' ? 'light' : 'dark'}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        style={{ width: "20px", marginBottom: "5px" }}
                        src="../public/logo.webp"
                        alt=""
                    />{" "}
                    CRUD APP
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={props.toggleMode}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
    