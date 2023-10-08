import Header from '../Header/Header';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';
import { Footer } from '../Footer/Footer';
import './Main.css';

export function Main({ loggedIn, burgerClick }) {
    return (
        <>
            {loggedIn ? <AuthHeader burgerClick={burgerClick} /> : <Header />}
            <main className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
