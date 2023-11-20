import logo from '../../images/icons/header__logo.svg';
import { Link } from 'react-router-dom';
import '../SignIn/SignIn.css';
import useFormWithValidation from '../../hooks/useFormValidation';
import ErrorContext from '../../contexts/ErrorContext';
import { useCallback, useContext } from 'react';
import emailRegex from '../../utils/Regex';

export function SignIn({ login, setIsError, isPass }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const isError = useContext(ErrorContext);

    useCallback(() => {
        setIsError(false);
    }, []);

    function handleSubmitClick(e) {
        e.preventDefault();
        login(values.email, values.password);
    }

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
                    onSubmit={handleSubmitClick}
                >
                    <fieldset className="sign-in__input-container">
                        <p className="sign-in__text">E-mail</p>
                        <input
                            id="email"
                            type="email"
                            className={`sign-in__input ${
                                errors.email ? 'sign-in__input_type_error' : ''
                            }`}
                            autoComplete="off"
                            placeholder="Ваш E-mail"
                            required
                            minLength="2"
                            maxLength="40"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            disabled={isPass}
                            pattern={emailRegex}
                        />
                        <span id="error-email" className="sign-in__error">
                            {errors.email}
                        </span>
                    </fieldset>
                    <fieldset className="sign-in__input-container">
                        <p className="sign-in__text">Пароль</p>
                        <input
                            id="password"
                            type="password"
                            className={`sign-in__input ${
                                errors.email ? 'sign-in__input_type_error' : ''
                            }`}
                            autoComplete="off"
                            placeholder="Ваш пароль"
                            required
                            minLength="2"
                            maxLength="200"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            disabled={isPass}
                        />
                        <span id="error-pass" className="sign-in__error">
                            {errors.password}
                        </span>
                    </fieldset>
                    <span id="error-api" className="sign-in__api-error">
                        {isError ? 'При входе в профиль произошла ошибка.' : ''}
                    </span>
                    <button
                        className={`sign-in__button link ${
                            isValid ? '' : 'sign-in__button_type_disabled'
                        }`}
                        type="submit"
                        disabled={!isValid ? true : ''}
                    >
                        Войти
                    </button>
                </form>
                <p className="sign-in__info">
                    Еще не зарегистрированы?{' '}
                    <Link
                        to="/signup"
                        className="sign-in__info-link sign-in__info-link_color_blue link"
                    >
                        Регистрация
                    </Link>
                </p>
            </section>
        </main>
    );
}
