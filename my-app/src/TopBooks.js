
export const TopBooks = () =>{
    return(
        <>
    <div className="container-fluid p-0">
        <div className="d-flex flex-column text-light justify-contentcenter align-items-center my-4 bg-success py-3">
            <h1>Top Books</h1>
            <p>Explore our highest-rated books.</p>
        </div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Slides */}
        <div className="carousel-inner mb-5">
          <div className="carousel-item active">
            <div className="d-flex flex-sm-row flex-column justify-content-center row align-items-stretch">    
                <div className="card text-center col-lg-2 col-md-4 col-8 bg-light my-sm-0 my-3 mx-auto hover-scale:hover hover-scale">
                    <div className="card-body d-flex flex-column align-items-stretch gap-3">
                        <h5 className="card-title">Read Books Online</h5>
                        <img src={"https://books.google.com/books/content?id=NJYYvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"} className='card-img-top mx-auto' style={{width:"150px",height:"225px"}}/>
                        <button className='btn btn-primary rounded-pill mx-auto'>Add Favorite</button>
                    </div>
                </div>
                <div className="card text-center col-lg-2 col-md-4 col-8 bg-light my-sm-0 my-3 mx-auto hover-scale:hover hover-scale">
                    <div className="card-body d-flex flex-column align-items-stretch gap-3">
                        <h5 className="card-title">Read Books Online</h5>
                        <img src={"https://books.google.com/books/content?id=NJYYvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"} className='card-img-top mx-auto' style={{width:"150px",height:"225px"}}/>
                        <button className='btn btn-primary rounded-pill mx-auto'>Add Favorite</button>
                    </div>
                </div>
                    <div className="card text-center col-lg-2 col-md-4 col-8 bg-light my-sm-0 my-3 mx-auto hover-scale:hover hover-scale">
                    <div className="card-body d-flex flex-column align-items-stretch gap-3">
                        <h5 className="card-title">Read Books Online</h5>
                        <img src={"https://books.google.com/books/content?id=NJYYvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"} className='card-img-top mx-auto' style={{width:"150px",height:"225px"}}/>
                        <button className='btn btn-primary rounded-pill mx-auto'>Add Favorite</button>
                    </div>
                </div>
                    <div className="card text-center col-lg-2 col-md-4 col-8 bg-light my-sm-0 my-3 mx-auto hover-scale:hover hover-scale">
                    <div className="card-body d-flex flex-column align-items-stretch gap-3">
                        <h5 className="card-title">Read Books Online</h5>
                        <img src={"https://books.google.com/books/content?id=NJYYvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"} className='card-img-top mx-auto' style={{width:"150px",height:"225px"}}/>
                        <button className='btn btn-primary rounded-pill mx-auto'>Add Favorite</button>
                    </div>
                </div>
            </div>
          </div>
          <div className="carousel-item">
               <div className="card text-center col-lg-3 col-md-8 col-8 p-3 bg-light my-sm-0 my-3 mx-auto">
                    <div className="card-body">
                        <i className="fa-solid fa-bookmark text-success fa-2x mb-3"></i>
                        <h5 className="card-title">Favorites List</h5>
                        <p className="card-text">Save books to your personal account for later reading.</p>
                    </div>
                </div>
          </div>
          <div className="carousel-item">
               <div className="card text-center col-lg-3 col-md-8 col-8 p-3 bg-light my-sm-0 my-3 mx-auto">
                    <div className="card-body">
                        <i className="fa-solid fa-bookmark text-success fa-2x mb-3"></i>
                        <h5 className="card-title">Favorites List</h5>
                        <p className="card-text">Save books to your personal account for later reading.</p>
                    </div>
                </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon rounded-circle bg-dark p-4"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon rounded-circle bg-dark p-4"></span>
        </button>
      </div>
    </div>
        </>
    );
}