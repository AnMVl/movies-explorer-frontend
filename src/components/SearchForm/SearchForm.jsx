import './SearchForm.css';
import { FormCheckBox } from '../FormCheckBox/FormCheckBox';

export function SearchForm({ isCheck, checkboxClick }) {
    return (
        <section className="searchForm">
            <form
                method="post"
                noValidate
                className="searchForm__form-container"
            >
                <fieldset className="searchForm__input-container">
                    <input
                        id="movies"
                        type="text"
                        className="searchForm__input"
                        autoComplete="off"
                        required
                        minLength="2"
                        maxLength="40"
                        placeholder="Фильм"
                        name="movies"
                    />
                    <button className="searchForm__button" type="submit">
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
