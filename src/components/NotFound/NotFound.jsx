import '../NotFound/NotFound.css';
import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <main className="main">
            <section className="not-found">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__text">Страница не найдена</p>
                <Link to="/signin" className="not-found__link">
                    Назад
                </Link>
            </section>
        </main>
    );
}
