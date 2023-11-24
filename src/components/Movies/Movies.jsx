import { useCallback, useEffect, useState } from 'react';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi.js';
import { shortMovieDuration } from '../../utils/constants.js';

export function Movies({ burgerClick, setIsError, addMovie, savedMovies }) {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [firstLoading, setFirstLoading] = useState(true);

    const filter = useCallback((search, isCheck, movies) => {
        setSearchedMovie(search);
        localStorage.setItem('movie', JSON.stringify(search));
        localStorage.setItem('shorts', JSON.stringify(isCheck));
        localStorage.setItem('allmovies', JSON.stringify(movies));
        setFilteredMovies(
            movies.filter((movie) => {
                const searchName = movie.nameRU
                    .toLowerCase()
                    .includes(search.toLowerCase());
                return isCheck
                    ? searchName && movie.duration <= shortMovieDuration
                    : searchName;
            })
        );
    }, []);

    function searchMovies(search) {
        if (movies.length === 0) {
            setIsLoading(true);
            moviesApi
                .getMovies()
                .then((res) => {
                    setMovies(res);
                    setIsCheck(false);
                    setFirstLoading(false);
                    filter(search, isCheck, res);
                })
                .catch((err) => {
                    console.error(`Ошибка при поиске фильмов ${err}`);
                })
                .finally(() => setIsLoading(false));
        } else {
            filter(search, isCheck, movies);
        }
    }

    useEffect(() => {
        if (
            localStorage.allmovies &&
            localStorage.shorts &&
            localStorage.movie
        ) {
            const movies = JSON.parse(localStorage.allmovies);
            const search = JSON.parse(localStorage.movie);
            const isCheck = JSON.parse(localStorage.shorts);
            setFirstLoading(false);
            setSearchedMovie(search);
            setIsCheck(isCheck);
            setMovies(movies);
            filter(search, isCheck, movies);
        }
    }, [filter]);

    return (
        <>
            <AuthHeader burgerClick={burgerClick} auth="auth" />
            <main className="main">
                <SearchForm
                    isCheck={isCheck}
                    searchMovies={searchMovies}
                    searchedMovie={searchedMovie}
                    setIsError={setIsError}
                    firstLoading={firstLoading}
                    movies={movies}
                    filter={filter}
                    setIsCheck={setIsCheck}
                    savedMovies={savedMovies}
                />
                <MoviesCardList
                    movies={filteredMovies}
                    addMovie={addMovie}
                    savedMovies={savedMovies}
                    isLoading={isLoading}
                />
            </main>
            <Footer />
        </>
    );
}
