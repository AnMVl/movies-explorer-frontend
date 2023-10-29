import './Profile.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Link } from 'react-router-dom';

export function Profile({ burgerClick }) {
    return (
        <>
            <AuthHeader burgerClick={burgerClick} auth="auth" />
            <section className="profile">
                <h2 className="profile__userName">Привет, Виталий!</h2>
                <form method="post" className="profile__form">
                    <fieldset className="profile__input-container">
                        <p className="profile__input-name">Имя</p>
                        <input
                            type="text"
                            name="name"
                            autoComplete="off"
                            placeholder="Введите Ваше имя"
                            required
                            minLength="2"
                            maxLength="40"
                            className="profile__input"
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
                            placeholder="Введите Ваш Email"
                            required
                            minLength="2"
                            maxLength="40"
                            className="profile__input"
                        />
                        <span
                            id="error-email"
                            className="profile__error"
                        ></span>
                    </fieldset>
                </form>
                <button className="button profile__button-edit link">
                    Редактировать
                </button>
                <Link to="/" className="button profile__button-exit link">
                    Выйти из аккаунта
                </Link>
            </section>
        </>
    );
}
