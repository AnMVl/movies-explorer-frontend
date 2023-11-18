import './Header.css';
import logo from '../../images/icons/header__logo.svg';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            <div className="header__button-conteiner">
                <Link to="/signup" className="header__button">
                    <p className="header__button-register link">Регистрация</p>
                </Link>
                <Link to="/signin" className="header__button">
                    <div className="header__button-login link">
                        <p className="header__button-login-text">Войти</p>
                    </div>
                </Link>
            </div>
        </header>
    );
}
