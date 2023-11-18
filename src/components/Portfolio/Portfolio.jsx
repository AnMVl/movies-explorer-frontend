import '../Portfolio/Portfolio.css';
import { Link } from 'react-router-dom';

export function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__container">
                <li className="portfolio__link-container">
                    <Link
                        to="https://github.com/AntonMVl/how-to-learn"
                        className="portfolio__link link"
                        target="_blank"
                    >
                        <p className="portfolio__subtitle">Статичный сайт</p>
                        <div className="portfolio__button"></div>
                    </Link>
                </li>
                <li className="portfolio__link-container">
                    <Link
                        to="https://github.com/AntonMVl/russian-travel"
                        className="portfolio__link link"
                        target="_blank"
                    >
                        <p className="portfolio__subtitle">Адаптивный сайт</p>
                        <div className="portfolio__button"></div>
                    </Link>
                </li>
                <li className="portfolio__link-container">
                    <Link
                        to="https://github.com/AntonMVl/react-mesto-api-full-gha"
                        className="portfolio__link link"
                        target="_blank"
                    >
                        <p className="portfolio__subtitle">
                            Одностраничное приложение
                        </p>
                        <div className="portfolio__button"></div>
                    </Link>
                </li>
            </ul>
        </section>
    );
}
