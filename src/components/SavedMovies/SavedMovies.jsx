import './SavedMovies.css';
import { useCallback, useEffect, useState } from 'react';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';

export function SavedMovies({
    burgerClick,
    savedMovies,
    deleteMovie,
    setIsError,
}) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [searchedMouvie, setSearchedMovie] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [firstLoading, setFirstLoading] = useState(true);

    const filter = useCallback((search, isCheck, movies) => {
        setSearchedMovie(search);
        setFilteredMovies(
            movies.filter((movie) => {
                const searchName = movie.nameRU
                    .toLowerCase()
                    .includes(search.toLowerCase());
                return isCheck
                    ? searchName && movie.duration <= 40
                    : searchName;
            })
        );
    }, []);

    function searchMovies(search) {
        setFirstLoading(false);
        filter(search, isCheck, savedMovies);
    }

    useEffect(() => {
        if (savedMovies.length === 0) {
            setFirstLoading(true);
        } else {
            setFirstLoading(false);
        }
        filter(searchedMouvie, isCheck, savedMovies);
    }, [filter, savedMovies, isCheck, searchedMouvie]);

    return (
        <>
            <AuthHeader burgerClick={burgerClick} auth="auth" />
            <main className="main">
                <SearchForm
                    isCheck={isCheck}
                    searchMovies={searchMovies}
                    searchedMovie={searchedMouvie}
                    setIsError={setIsError}
                    firstLoading={firstLoading}
                    savedMovie={savedMovies}
                    movies={savedMovies}
                    filter={filter}
                    setIsCheck={setIsCheck}
                />
                <MoviesCardList
                    movies={filteredMovies}
                    deleteMovie={deleteMovie}
                />
            </main>
            <Footer />
        </>
    );
}
