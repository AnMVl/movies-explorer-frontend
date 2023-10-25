import { useState } from 'react';
import '../MoviesCardList/MoviesCardList.css';
import { Preloader } from '../Preloader/Preloader';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

export function MoviesCardList() {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const shouldShowButton = location.pathname !== '/saved-movies';
    return (
        <section className="movies-card-list">
            {isLoading ? <Preloader /> : null}
            <ul className="movies-card-list__catalog">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            {shouldShowButton && (
                <button className="movies-card-list__button link">Ещё</button>
            )}
        </section>
    );
}
