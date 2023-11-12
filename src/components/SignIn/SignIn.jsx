import logo from '../../images/icons/header__logo.svg';
import { Link } from 'react-router-dom';
import '../SignIn/SignIn.css';
import { useEffect, useState } from 'react';

export function SignIn({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        login(email, password);
    }

    useEffect(() => {
        setEmail('');
        setPassword('');
    }, []);

    return (
        <main className="main">
            <section className="sign-in">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="sign-in__logo" />
                </Link>
                <h1 className="sign-in__title">Рады видеть!</h1>
                <form
                    method="post"
                    noValidate
                    className="sign-in__form-container"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="sign-in__input-container">
                        <p className="sign-in__text">E-mail</p>
                        <input
                            id="email"
                            type="email"
                            className="sign-in__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        <span
                            id="error-email"
                            className="sign-in__error"
                        ></span>
                    </fieldset>
                    <fieldset className="sign-in__input-container">
                        <p className="sign-in__text">Пароль</p>
                        <input
                            id="password"
                            type="password"
                            className="sign-in__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="200"
                            name="password"
                            value={password}
                            onChange={handleChangePassword}
                        />
                        <span id="error-pass" className="sign-in__error"></span>
                    </fieldset>
                    <button className="sign-in__button link" type="submit">
                        Войти
                    </button>
                </form>
                <p className="sign-in__info">
                    Еще не зарегистрированы?{' '}
                    <Link
                        to="/signup"
                        className="sign-in__info sign-in__info_color_blue link"
                    >
                        Регистрация
                    </Link>
                </p>
            </section>
        </main>
    );
}
