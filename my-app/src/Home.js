import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from './Header';
import { FeaturesKeys } from './FeaturesKeys';
import { TopBooks } from './TopBooks';
export const Home = () =>{
    return(
        <>
        <Header/>
        <FeaturesKeys/>
        <TopBooks/>
        </>
    );
}