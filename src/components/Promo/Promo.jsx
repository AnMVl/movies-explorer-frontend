import { HashLink } from 'react-router-hash-link';
import promoLogo from '../../images/icons/promo__img.png';
import './Promo.css';

export function Promo() {
    return (
        <section className="promo">
            <div className="promo__text-container">
                <h1 className="promo__title">
                    Учебный проект студента факультета Веб-разработки.
                </h1>
                <p className="promo__text">
                    Листайте ниже, чтобы узнать больше про этот проект и его
                    создателя.
                </p>
                <HashLink to="#about-project" className="promo__button link">
                    Узнать больше
                </HashLink>
            </div>
            <img className="promo__img" src={promoLogo} alt="Плнета" />
        </section>
    );
}
