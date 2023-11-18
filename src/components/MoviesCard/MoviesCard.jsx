import { Link, useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';
import { MovieButton } from '../MovieButton/MovieButton';
import { DeleteMovieButton } from '../DeleteMovieButton/DeleteMovieButton';
import { useEffect, useState } from 'react';

export function MoviesCard({ deleteMovie, addMovie, data, savedMovies }) {
    const { pathname } = useLocation();
    const changeButton = pathname !== '/saved-movies';
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (pathname === '/movies') {
            setClick(
                savedMovies.some((element) => data.id === element.movieId)
            );
        }
    }, [savedMovies, data.id, addMovie, pathname]);

    function handleClick() {
        const isMovieSaved = savedMovies.some(
            (element) => data.id === element.movieId
        );
        if (isMovieSaved) {
            setClick(true);
            addMovie(data);
        } else {
            setClick(false);
            addMovie(data);
        }
    }

    function convertTime(duration) {
        const minutes = duration % 60;
        const hours = Math.floor(duration / 60);
        return hours === 0
            ? `${minutes}м`
            : minutes === 0
            ? `${hours}ч`
            : `${hours}ч${minutes}м`;
    }

    return (
        <li className="movies-card">
            <article className="movies-card__content">
                <div className="movies-card__title-container">
                    <Link
                        className="movies-card__title"
                        to={data.trailerLink}
                        target="_blank"
                    >
                        {data.nameRU}
                    </Link>
                    <p className="movies-card__duration">
                        {convertTime(data.duration)}
                    </p>
                </div>
                <div className="movies-card__container">
                    <Link to={data.trailerLink} target="_blank">
                        <img
                            src={
                                pathname === '/movies'
                                    ? `https://api.nomoreparties.co${data.image.url}`
                                    : data.image
                            }
                            alt={data.name}
                            className="movies-card__image"
                        />
                    </Link>
                    {changeButton ? (
                        <MovieButton click={click} handleClick={handleClick} />
                    ) : (
                        <DeleteMovieButton
                            deleteMovie={deleteMovie}
                            data={data}
                        />
                    )}
                </div>
            </article>
        </li>
    );
}
