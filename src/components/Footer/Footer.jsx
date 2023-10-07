import '../Footer/Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h3>
            <ul className="footer__container">
                <li className="footer__info">&copy; 2020</li>
                <li className="footer__info">
                    <nav className="footer__nav">
                        <ul className="footer__link-container">
                            <li className="footer__link">
                                <button className="footer__button">
                                    Яндекс.Практикум
                                </button>
                            </li>
                            <li className="footer__link">
                                <button className="footer__button">
                                    Github
                                </button>
                            </li>
                        </ul>
                    </nav>
                </li>
            </ul>
        </footer>
    );
}
