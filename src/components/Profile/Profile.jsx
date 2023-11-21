import './Profile.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ErrorContext from '../../contexts/ErrorContext';
import useFormValidation from '../../hooks/useFormValidation';
import emailRegex from '../../utils/Regex';

export function Profile({
    burgerClick,
    signOut,
    updateUserData,
    setCurrentUser,
    isSuccess,
}) {
    const currentUser = useContext(CurrentUserContext);
    const isError = useContext(ErrorContext);
    const [savedButton, setSavedButton] = useState(true);
    const { values, handleChange, errors, resetForm, isValid } =
        useFormValidation();

    useEffect(() => {
        resetForm({ username: currentUser.name, email: currentUser.email });
    }, [currentUser, resetForm, updateUserData]);

    function handleChangeButtonState() {
        if (savedButton === true) {
            setSavedButton(false);
        } else {
            setSavedButton(true);
        }
    }

    function handleSubmitForm(e) {
        const token = localStorage.getItem('token');
        e.preventDefault();
        updateUserData(values.username, values.email, token);
        setCurrentUser({ name: values.username, email: values.email });
        setSavedButton(true);
    }

    return (
        <>
            <AuthHeader burgerClick={burgerClick} auth="auth" />
            <section className="profile">
                <h2 className="profile__user-name">{`Привет, ${currentUser.name}!`}</h2>
                <form method="post" className="profile__form" noValidate>
                    <fieldset className="profile__input-container">
                        <p className="profile__input-name">Имя</p>
                        <input
                            type="text"
                            name="username"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            className="profile__input profile__input_type_border"
                            value={values.username || ''}
                            disabled={savedButton}
                            onChange={handleChange}
                            placeholder="Введите Ваше имя"
                        />
                        <span id="error-name" className="profile__error">
                            {errors.username}
                        </span>
                    </fieldset>
                    <span className="profile__input-border"></span>
                    <fieldset className="profile__input-container">
                        <p className="profile__input-name">E-mail</p>
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            className="profile__input"
                            value={values.email || ''}
                            disabled={savedButton}
                            onChange={handleChange}
                            placeholder="Введите Вашу электронную почту"
                            pattern={emailRegex}
                        />
                        <span id="error-email" className="profile__error">
                            {errors.email}
                        </span>
                    </fieldset>
                    <span id="error-api" className="profile__error">
                        {isError
                            ? 'При обновлении профиля произошла ошибка.'
                            : ''}
                    </span>
                    <span id="success-api" className="profile__success">
                        {isSuccess
                            ? 'Обновление профиля произошло успешно.'
                            : ''}
                    </span>
                </form>
                {savedButton ? (
                    <button
                        className="button profile__button-edit link"
                        onClick={handleChangeButtonState}
                    >
                        Редактировать
                    </button>
                ) : null}
                {savedButton ? (
                    <Link
                        to="/"
                        onClick={signOut}
                        className="button profile__button-exit link"
                    >
                        Выйти из аккаунта
                    </Link>
                ) : null}
                {savedButton ? null : (
                    <>
                        <button
                            className={`profile__update-button link ${
                                isValid
                                    ? ''
                                    : 'profile__update-button_type_disabled'
                            } ${
                                values.username === currentUser.name &&
                                values.email === currentUser.email
                                    ? 'profile__update-button_type_disabled'
                                    : ''
                            }`}
                            onClick={handleSubmitForm}
                            disabled={
                                !isValid ||
                                (values.username === currentUser.name &&
                                    values.email === currentUser.email)
                                    ? true
                                    : ''
                            }
                        >
                            Сохранить
                        </button>
                    </>
                )}
            </section>
        </>
    );
}
