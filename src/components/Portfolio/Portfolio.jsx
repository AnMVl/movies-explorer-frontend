import '../Portfolio/Portfolio.css';
import portfolioButton from '../../images/icons/portfolio__button.svg';

export function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__container">
                <li className="portfolio__link-container">
                    <a className="portfolio__link" href="#">
                        Статичный сайт
                    </a>
                    <button className="portfolio__button"></button>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link" href="#">
                        Адаптивный сайт
                    </a>
                    <button className="portfolio__button"></button>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link" href="#">
                        Одностраничное приложение
                    </a>
                    <button className="portfolio__button"></button>
                </li>
            </ul>
        </section>
    );
}
