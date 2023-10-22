import { Link, useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';
import cardImageTest from '../../images/cardImageTest.jpg';
import { ActiveButton } from '../ActiveButton/ActiveButton';
import { NotActiveButton } from '../NotActiveButton/NotActiveButton';
import { DeleteMovieButton } from '../DeleteMovieButton/DeleteMovieButton';
import { useState } from 'react';

export function MoviesCard() {
    const [isCheck, setIsCheck] = useState(false);
    const location = useLocation();
    const changeButton = location.pathname !== '/saved-movies';

    function handleButtonClick() {
        if (isCheck === true) {
            setIsCheck(false);
        } else {
            setIsCheck(true);
        }
    }

    return (
        <li className="moviesCard">
            <article className="moviesCard__content">
                <div className="moviesCard__title-container">
                    <Link className="moviesCard__title">
                        В погоне за Бенкси
                    </Link>
                    <p className="moviesCard__duration">0ч 42м</p>
                </div>
                <div className="moviesCard__container">
                    <Link>
                        <img
                            src={cardImageTest}
                            alt="Изображение фильма"
                            className="moviesCard__image"
                        />
                    </Link>
                    {changeButton ? (
                        isCheck ? (
                            <ActiveButton
                                handleButtonClick={handleButtonClick}
                            />
                        ) : (
                            <NotActiveButton
                                handleButtonClick={handleButtonClick}
                            />
                        )
                    ) : (
                        <DeleteMovieButton />
                    )}
                </div>
            </article>
        </li>
    );
}
