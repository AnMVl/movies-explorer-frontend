import './Header.css';
import logo from '../../images/icons/header__logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип" />
            </Link>
            <div className="header__button-conteiner">
                <Link to="/signup">
                    <button className="header__button-register">
                        Регистрация
                    </button>
                </Link>
                <Link to="/signin">
                    <button className="header__button-login">Войти</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
