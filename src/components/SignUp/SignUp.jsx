import '../SignUp/SignUp.css';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/header__logo.svg';
import useFormWithValidation from '../../hooks/useFormValidation';
import ErrorContext from '../../contexts/ErrorContext';
import { useCallback, useContext } from 'react';

export function SignUp({ registration, isPass, setIsError }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const isError = useContext(ErrorContext);

    useCallback(() => {
        setIsError(false);
    }, []);

    function handleSubmitClick(e) {
        e.preventDefault();
        registration(values.username, values.email, values.password);
    }

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
                    onSubmit={handleSubmitClick}
                >
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">Имя</p>
                        <input
                            id="name"
                            type="text"
                            className="sign-up__input"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="username"
                            onChange={handleChange}
                            disabled={isPass}
                        />
                        <span id="error-email" className="sign-up__error">
                            {errors.username}
                        </span>
                    </fieldset>
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">E-mail</p>
                        <input
                            id="email"
                            type="email"
                            className={`sign-up__input ${
                                errors.email ? 'sign-up__input_type_error' : ''
                            }`}
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            name="email"
                            onChange={handleChange}
                            disabled={isPass}
                        />
                        <span id="error-email" className="sign-up__error">
                            {errors.email}
                        </span>
                    </fieldset>
                    <fieldset className="sign-up__input-container">
                        <p className="sign-up__text">Пароль</p>
                        <input
                            id="password"
                            type="password"
                            className={`sign-up__input ${
                                errors.password
                                    ? 'sign-up__input_type_error'
                                    : ''
                            }`}
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="200"
                            name="password"
                            onChange={handleChange}
                        />
                        <span id="error-pass" className="sign-up__error">
                            {errors.password}
                        </span>
                    </fieldset>
                    <span id="error-api" className="sign-up__api-error">
                        {isError
                            ? 'При регистрации профиля произошла ошибка.'
                            : ''}
                    </span>
                    <button
                        className={`sign-up__button link ${
                            isValid ? '' : 'sign-up__button_type_disabled'
                        }`}
                        disabled={!isValid ? true : ''}
                        type="submit"
                    >
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
