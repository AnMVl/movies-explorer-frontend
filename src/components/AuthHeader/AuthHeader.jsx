import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../images/icons/header__logo.svg';
import '../AuthHeader/AuthHeader.css';

export function AuthHeader({ burgerClick, auth }) {
    const location = useLocation();
    const movieLink = location.pathname === '/movies';
    const savedmovieLink = location.pathname === '/saved-movies';
    const profileLink = location.pathname === '/profile';
    return (
        <header
            className={`auth-header ${auth ? 'auth-header_type_movies' : ''}`}
        >
            <Link to="/">
                <img
                    className="auth-header__logo"
                    src={headerLogo}
                    alt="Логотип"
                />
            </Link>
            <button
                className="auth-header__burger"
                onClick={burgerClick}
            ></button>
            <nav className="auth-header__nav-bar">
                <ul className="auth-header__list">
                    <li className="auth-header__item">
                        <Link
                            to="/movies"
                            className={`auth-header__button link ${
                                movieLink
                                    ? 'auth-header__button_type_active'
                                    : ''
                            }`}
                        >
                            Фильмы
                        </Link>
                    </li>
                    <li className="auth-header__item">
                        <Link
                            to="/saved-movies"
                            className={`auth-header__button link ${
                                savedmovieLink
                                    ? 'auth-header__button_type_active'
                                    : ''
                            }`}
                        >
                            Сохранённые фильмы
                        </Link>
                    </li>
                    <li className="auth-header__item">
                        <Link
                            to="/profile"
                            className={`auth-header__button auth-header__button_type_profile link ${
                                profileLink
                                    ? 'auth-header__button_type_active'
                                    : ''
                            }`}
                        >
                            Аккаунт
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link to="/signup" className="header__button link">
                            <button
                                className={`header__button-profile ${
                                    auth
                                        ? 'auth-header__button-profile_type_movies'
                                        : ''
                                }`}
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
