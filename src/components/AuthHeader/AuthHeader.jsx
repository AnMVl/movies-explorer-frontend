import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../../images/icons/header__logo.svg';
import buttonImg from '../../images/icons/header-auth-img.svg';
import '../AuthHeader/AuthHeader.css';

export function AuthHeader({ burgerClick, auth }) {
    const location = useLocation();
    const movieLink = location.pathname === '/movies';
    const savedmovieLink = location.pathname === '/saved-movies';
    const profileLink = location.pathname === '/profile';
    return (
        <header className={`header ${auth ? 'header_type_movies' : ''}`}>
            <Link to="/">
                <img className="header__logo" src={headerLogo} alt="Логотип" />
            </Link>
            <button className="header__burger" onClick={burgerClick}></button>
            <nav className="header__nav-bar">
                <ul className="header__list">
                    <li className="header__item">
                        <Link
                            to="/movies"
                            className={`header__button link ${
                                movieLink ? 'header__button_type_active' : ''
                            }`}
                        >
                            Фильмы
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            to="/saved-movies"
                            className={`header__button link ${
                                savedmovieLink
                                    ? 'header__button_type_active'
                                    : ''
                            }`}
                        >
                            Сохранённые фильмы
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            to="/profile"
                            className={`header__button link ${
                                profileLink ? 'header__button_type_active' : ''
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
                                        ? 'header__button-profile_type_movies'
                                        : ''
                                }`}
                            >
                                <img
                                    src={buttonImg}
                                    alt="Кнопка личного кабинета пользователя"
                                />
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
