import React, { useEffect } from 'react';
import '../BurgerMenu/BurgerMenu.css';
import buttonImg from '../../images/icons/header-auth-img.svg';
import { Link, useLocation } from 'react-router-dom';

export function BurgerMenu({ onClose, isOpen }) {
    const location = useLocation();
    const mainLink = location.pathname === '/';
    const movieLink = location.pathname === '/movies';
    const savedMovieLink = location.pathname === '/saved-movies';
    const profileLink = location.pathname === '/profile';
    useEffect(() => {
        const handleEscClose = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscClose);
        }

        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, [isOpen, onClose]);

    const handlePopupClose = (e) => {
        if (
            e.target.classList.contains('burger_opened') ||
            e.target.classList.contains('burger__close')
        ) {
            onClose();
        }
    };

    return (
        <section
            className={`burger ${isOpen ? 'burger_opened' : ''}`}
            onClick={handlePopupClose}
        >
            <div className="burger__container">
                <button
                    type="button"
                    className="burger__close"
                    onClick={onClose}
                ></button>
                <nav className="burger__nav-bar">
                    <ul className="burger__list">
                        <li className="burger__item">
                            <Link
                                to="/"
                                className={`burger__button link ${
                                    mainLink ? 'burger__button_type_active' : ''
                                }`}
                                onClick={onClose}
                            >
                                Главная
                            </Link>
                        </li>
                        <li className="burger__item">
                            <Link
                                to="/movies"
                                className={`burger__button link ${
                                    movieLink
                                        ? 'burger__button_type_active'
                                        : ''
                                }`}
                                onClick={onClose}
                            >
                                Фильмы
                            </Link>
                        </li>
                        <li className="burger__item">
                            <Link
                                to="/saved-movies"
                                className={`burger__button link ${
                                    savedMovieLink
                                        ? 'burger__button_type_active'
                                        : ''
                                }`}
                                onClick={onClose}
                            >
                                Сохранённые фильмы
                            </Link>
                        </li>
                    </ul>
                    <ul className="burger__list burger__list_type_profile">
                        <li className="burger__item">
                            <Link
                                to="/profile"
                                className={`burger__button burger__button__type_profile link ${
                                    profileLink
                                        ? 'burger__button_type_active'
                                        : ''
                                }`}
                                onClick={onClose}
                            >
                                Аккаунт
                            </Link>
                        </li>
                        <li className="burger__item">
                            <Link
                                to="/profile"
                                className="burger__button link"
                                onClick={onClose}
                            >
                                <button className="burger__button-profile">
                                    <img
                                        src={buttonImg}
                                        alt="Кнопка личного кабинета пользователя"
                                    />
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
