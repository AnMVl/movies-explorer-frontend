import './SearchForm.css';
import { FormCheckBox } from '../FormCheckBox/FormCheckBox';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import ErrorContext from '../../contexts/ErrorContext';

export function SearchForm({
    isCheck,
    searchedMovie,
    searchMovies,
    setIsError,
    firstLoading,
    savedMovie,
    movies,
    filter,
    setIsCheck,
}) {
    const { pathname } = useLocation();
    const isError = useContext(ErrorContext);
    const { values, handleChange, resetForm } = useFormValidation();

    useEffect(() => {
        if (pathname === '/saved-movies' && savedMovie.length === 0) {
            resetForm({ search: '' });
        } else {
            resetForm({ search: searchedMovie });
        }
        setIsError(false);
    }, [searchedMovie, resetForm, setIsError, pathname, savedMovie]);

    function handleSubmitForm(evt) {
        evt.preventDefault();
        if (evt.target.search.value) {
            searchMovies(evt.target.search.value);
            setIsError(false);
        } else {
            setIsError(true);
        }
    }

    function changeShort() {
        if (isCheck) {
            setIsCheck(false);
            filter(values.search, false, movies);
        } else {
            setIsCheck(true);
            filter(values.search, true, movies);
        }
    }

    return (
        <section className="search-form">
            <form
                noValidate
                className="search-form__form-container"
                onSubmit={handleSubmitForm}
                name={'SearchForm'}
            >
                <fieldset className="search-form__input-container">
                    <input
                        type="text"
                        className="search-form__input"
                        required
                        minLength="2"
                        maxLength="40"
                        placeholder="Фильм"
                        name="search"
                        value={values.search || ''}
                        onChange={(evt) => {
                            handleChange(evt);
                        }}
                        disabled={
                            savedMovie ? savedMovie.length === 0 && true : false
                        }
                    />
                    <button className="search-form__button link" type="submit">
                        Поиск
                    </button>
                    <span
                        className={`search__error ${
                            isError && 'search__error_active'
                        }`}
                    >
                        {'Введите ключевое слово'}
                    </span>
                    <FormCheckBox
                        isCheck={isCheck}
                        changeShort={changeShort}
                        firstLoading={firstLoading}
                    />
                </fieldset>
            </form>
        </section>
    );
}
