import "@fortawesome/fontawesome-free/css/all.min.css";

export const FeaturesKeys = () =>{
    return(
        <div className="container-fluid my-3 text-center px-5">
            <div className="my-4">
                <h1>Key Features</h1>
                <p>All the tools you need for a seamless library experience.</p>
            </div>
            <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center gap-3 row">    
                <div className="card text-center col-lg-3 col-md-8 col-8 p-3 bg-light my-sm-0 my-3">
                    <div className="card-body">
                        <i className="fa-solid fa-book text-success fa-2x mb-3"></i>
                        <h5 className="card-title">Read Books Online</h5>
                        <p className="card-text">Enjoy reading a wide range of books in a digital form</p>
                    </div>
                </div>
                <div className="card text-center col-lg-3 col-md-8 col-8 p-3 bg-light my-sm-0 my-3">
                    <div className="card-body">
                        <i className="fa-solid fa-star text-success fa-2x mb-3"></i>
                        <h5 className="card-title">Rate &amp; Comment</h5>
                        <p className="card-text">Join the community and share your thoughts on books.</p>
                    </div>
                </div>
                <div className="card text-center col-lg-3 col-md-8 col-8 p-3 bg-light my-sm-0 my-3">
                    <div className="card-body">
                        <i className="fa-solid fa-bookmark text-success fa-2x mb-3"></i>
                        <h5 className="card-title">Favorites List</h5>
                        <p className="card-text">Save books to your personal account for later reading.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}