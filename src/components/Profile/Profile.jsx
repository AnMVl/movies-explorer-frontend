import './Profile.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export function Profile({ burgerClick, signOut, updateUserData }) {
    const currentUser = useContext(CurrentUserContext);
    const [savedButton, setSavedButton] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleChangeButtonState() {
        if (savedButton === true) {
            setSavedButton(false);
        } else {
            setSavedButton(true);
        }
    }

    function handleSubmitForm(name, email) {
        updateUserData(name, email);
        setSavedButton(true);
    }

    return (
        <>
            <AuthHeader burgerClick={burgerClick} auth="auth" />
            <section className="profile">
                <h2 className="profile__user-name">{`Привет, ${currentUser.name}!`}</h2>
                <form method="post" className="profile__form">
                    <fieldset className="profile__input-container">
                        <p className="profile__input-name">Имя</p>
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            className="profile__input profile__input_type_border"
                            value={savedButton ? currentUser.name : name}
                            disabled={savedButton}
                            onChange={handleChangeName}
                            placeholder="Введите Ваше имя"
                        />
                        <span id="error-name" className="profile__error"></span>
                    </fieldset>
                    <span className="profile__input-border"></span>
                    <fieldset className="profile__input-container">
                        <p className="profile__input-name">E-mail</p>
                        <input
                            type="text"
                            name="e-mail"
                            autoComplete="off"
                            required
                            minLength="2"
                            maxLength="40"
                            className="profile__input"
                            value={savedButton ? currentUser.email : email}
                            disabled={savedButton}
                            onChange={handleChangeEmail}
                            placeholder="Введите Вашу электронную почту"
                        />
                        <span
                            id="error-email"
                            className="profile__error"
                        ></span>
                    </fieldset>
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
                        <span
                            id="error-api"
                            className="profile__error-api"
                        ></span>
                        <button
                            className="profile__update-button link"
                            onClick={() => handleSubmitForm(name, email)}
                        >
                            Сохранить
                        </button>
                    </>
                )}
            </section>
        </>
    );
}
