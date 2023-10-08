import { Link } from 'react-router-dom';
import headerLogo from '../../images/icons/header__logo.svg';
import buttonImg from '../../images/icons/header-auth-img.svg';
import '../AuthHeader/AuthHeader.css';

export function AuthHeader({ burgerClick, auth }) {
    return (
        <header className={`header ${auth ? 'header_type_movies' : ''}`}>
            <img src={headerLogo} alt="Логотип" className="header__logo" />
            <button className="header__burger" onClick={burgerClick}></button>
            <nav className="header__nav-bar">
                <ul className="header__list">
                    <li className="header__item">
                        <Link to="/movies" className="header__button">
                            Фильмы
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link to="/signup" className="header__button">
                            Сохранённые фильмы
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link to="/signup" className="header__button">
                            Аккаунт
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link to="/signup" className="header__button">
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
