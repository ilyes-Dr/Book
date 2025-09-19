import "@fortawesome/fontawesome-free/css/all.min.css";

export const Navbar = () =>{
    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-light">
        <div class="container-fluid">
            {/*<!-- Brand -->*/}
            <span className="flex-grow-1">
                <a class="navbar-brand" href="#"><i className="fa-solid fa-university fa-2x text-light"></i></a>
            </span>
            {/*<!-- Toggle button for mobile -->*/}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" style={{flexGrow:2}} id="navbarNav">
                <div className="input-group my-md-3 my-sm-3 my-3 flex-grow-1 w-auto">
                    <span className="input-group-text bg-white border-end-0">
                        <i className="fa-solid fa-search"></i>
                    </span>
                    <input type="search" className="form-control border-start-0" placeholder="Search..."/>
                </div>
                <ul class="navbar-nav flex-grow-1 d-flex justify-content-end">
                    <li class="nav-item mx-sm-2 my-2">
                        <a href="#" className="btn btn-danger">Sign in</a>
                    </li>
                    <li class="nav-item mx-sm-2 my-2">
                        <a href="#" className="btn btn-primary">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}