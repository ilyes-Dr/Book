import { Navbar } from './Navbar';
export const Header = () =>{
    return(
        <>
        <header className='container-fluid p-0 border-bottom border-5 border-success' style={{height:"90vh",overflow:"hidden"}}>
            <Navbar/>
            <div className='h-100 position-relative'>
                <img src={require('./assets/headerImg.jpg')} className='w-100 h-100' style={{objectFit:"cover"}}/>
                <div className="position-absolute d-flex justify-content-center align-items-center flex-column top-0 start-0 w-100 h-100 p-2" style={{backgroundColor:"#198754b0"}}>
                    <h1 className='text-light fw-bold'>Your University Library</h1>
                    <p class="text-light text-center">Explore a universe of knowledge, connect with peers, and enhance your academic journey.</p>
                    <button className='btn btn-primary border-light rounded-pill'>Browse Books</button>
                </div>
            </div>
        </header>
        </>
    );
}