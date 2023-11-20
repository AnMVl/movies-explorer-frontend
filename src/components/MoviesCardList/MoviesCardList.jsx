import { useEffect, useState } from 'react';
import '../MoviesCardList/MoviesCardList.css';
import { Preloader } from '../Preloader/Preloader';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import {
    MaxScreen,
    MediumScreen,
    SmallScreen,
    InitMoreMaxScreen,
    InitLessMaxScreen,
    InitMediumScreen,
    InitSmallScreen,
    StepMaxScreen,
    StepMediumScreen,
    StepSmallScreen,
} from '../../utils/Params.js';

export function MoviesCardList({
    movies,
    deleteMovie,
    addMovie,
    savedMovies,
    isLoading,
}) {
    const { pathname } = useLocation();
    const shouldShowButton = pathname !== '/saved-movies';
    const [count, setCount] = useState('');
    const fact = movies.slice(0, count);

    function printCards() {
        const counter = { init: InitMoreMaxScreen, step: StepMaxScreen };
        if (window.innerWidth < MaxScreen) {
            counter.init = InitLessMaxScreen;
            counter.step = StepMediumScreen;
        }
        if (window.innerWidth < MediumScreen) {
            counter.init = InitMediumScreen;
            counter.step = StepSmallScreen;
        }
        if (window.innerWidth < SmallScreen) {
            counter.init = InitSmallScreen;
            counter.step = StepSmallScreen;
        }
        return counter;
    }

    useEffect(() => {
        if (pathname === '/movies') {
            setCount(printCards().init);
            function printCardsForResize() {
                if (window.innerWidth >= StepMaxScreen) {
                    setCount(printCards().init);
                }
                if (window.innerWidth < StepMaxScreen) {
                    setCount(printCards().init);
                }
                if (window.innerWidth < MediumScreen) {
                    setCount(printCards().init);
                }
                if (window.innerWidth < SmallScreen) {
                    setCount(printCards().init);
                }
            }
            window.addEventListener('resize', printCardsForResize);
            return () =>
                window.removeEventListener('resize', printCardsForResize);
        }
    }, [pathname, movies]);

    function clickMore() {
        setCount(count + printCards().step);
    }

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__catalog">
                {isLoading ? (
                    <Preloader />
                ) : pathname === '/movies' && fact.length !== 0 ? (
                    fact.map((data) => {
                        return (
                            <MoviesCard
                                key={data.id}
                                savedMovies={savedMovies}
                                addMovie={addMovie}
                                data={data}
                            />
                        );
                    })
                ) : movies.length !== 0 ? (
                    movies.map((data) => {
                        return (
                            <MoviesCard
                                key={data._id}
                                deleteMovie={deleteMovie}
                                data={data}
                            />
                        );
                    })
                ) : pathname === '/movies' ? (
                    <span className="movies-card-list__serch-error">
                        «Чтобы увидеть список фильмов выполните поиск»
                    </span>
                ) : (
                    <span className="movies-card-list__serch-error">
                        «Нет сохранённых фильмов»
                    </span>
                )}

            </ul>
            {shouldShowButton && (
                <button
                    className={`movies-card-list__button link ${
                        count >= movies.length &&
                        'movies-card-list__button_type_disabled'
                    }`}
                    onClick={clickMore}
                >
                    Ещё
                </button>
            )}
        </section>
    );
}
