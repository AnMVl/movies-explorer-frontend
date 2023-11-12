import '../SignUp/SignUp.css';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/header__logo.svg';
import { useState } from 'react';

export function SignUp({ registration }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeUserName(evt) {
        setUserName(evt.target.value);
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registration(userName, email, password);
    };

    return (
        <main className="main">
            <section className="sign-up">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="sign-up__logo" />
                </Link>
                <h1 className="sign-up__title">Добро пожаловать!</h1>
                <form
                    method="post"
                    noValidate
                    className="sign-up__form-container"
                    onSubmit={handleSubmit}
                >
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">Имя</p>
                        <input
                            id="name"
                            type="name"
                            className="sign-up__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="name"
                            value={userName}
                            onChange={handleChangeUserName}
                        />
                        <span
                            id="error-email"
                            className="sign-up__error"
                        ></span>
                    </fieldset>
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">E-mail</p>
                        <input
                            id="email"
                            type="email"
                            className="sign-up__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        <span id="error-email" className="signUp__error"></span>
                    </fieldset>
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">Пароль</p>
                        <input
                            id="password"
                            type="password"
                            className="sign-up__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="200"
                            name="password"
                            value={password}
                            onChange={handleChangePassword}
                        />
                        <span id="error-pass" className="sign-up__error"></span>
                    </fieldset>
                    <button className="sign-up__button link" type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                <p className="sign-up__info">
                    Уже зарегистрированы?{' '}
                    <Link
                        to="/signin"
                        className="sign-up__info sign-up__info_color_blue link"
                    >
                        Войти
                    </Link>
                </p>
            </section>
        </main>
    );
}
