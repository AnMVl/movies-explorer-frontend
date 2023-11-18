import './SavedMovies.css';
import { useState } from 'react';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';

export function SavedMovies({ burgerClick }) {
    const [isCheck, setIsCheck] = useState(false);

    function checkboxClick() {
        if (isCheck === true) {
            setIsCheck(false);
        } else {
            setIsCheck(true);
        }
    }

    return (
        <>
            <AuthHeader burgerClick={burgerClick} auth="auth" />
            <main className="main">
                <SearchForm isCheck={isCheck} checkboxClick={checkboxClick} />
                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
}
