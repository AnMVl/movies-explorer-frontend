import '../Portfolio/Portfolio.css';

export function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className="portfolio__container">
                <li className="portfolio__link-container">
                    <a className="portfolio__link link" href="#">
                        Статичный сайт
                    </a>
                    <button className="portfolio__button link"></button>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link link" href="#">
                        Адаптивный сайт
                    </a>
                    <button className="portfolio__button link"></button>
                </li>
                <li className="portfolio__link-container">
                    <a className="portfolio__link link" href="#">
                        Одностраничное приложение
                    </a>
                    <button className="portfolio__button link"></button>
                </li>
            </ul>
        </section>
    );
}
