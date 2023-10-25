import './SearchForm.css';
import { FormCheckBox } from '../FormCheckBox/FormCheckBox';

export function SearchForm({ isCheck, checkboxClick }) {
    return (
        <section className="search-form">
            <form
                method="post"
                noValidate
                className="search-form__form-container"
            >
                <fieldset className="search-form__input-container">
                    <input
                        id="movies"
                        type="text"
                        className="search-form__input"
                        autoComplete="off"
                        required
                        minLength="2"
                        maxLength="40"
                        placeholder="Фильм"
                        name="movies"
                    />
                    <button className="search-form__button link" type="submit">
                        Поиск
                    </button>
                    <FormCheckBox
                        isCheck={isCheck}
                        checkboxClick={checkboxClick}
                    />
                </fieldset>
            </form>
        </section>
    );
}
