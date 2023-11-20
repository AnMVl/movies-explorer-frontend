import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Main } from './Main/Main.jsx';
import { SignIn } from './SignIn/SignIn';
import { SignUp } from './SignUp/SignUp';
import { NotFound } from './NotFound/NotFound';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Movies } from './Movies/Movies';
import { SavedMovies } from './SavedMovies/SavedMovies';
import { Profile } from './Profile/Profile';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute.jsx';
import mainApi from '../utils/MainApi.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import ErrorContext from '../contexts/ErrorContext';
import { useCallback, useEffect, useState } from 'react';
import { Preloader } from './Preloader/Preloader.jsx';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isTokenCheck, setIsTokenCheck] = useState(true);
    const [burgerPopupOpen, setBurgerPopupOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [savedMovies, setSavedMovies] = useState([]);
    const [isPass, setIsPass] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    function handleBurgerPopupClick() {
        setBurgerPopupOpen(true);
    }

    const closeAllPopups = useCallback(() => {
        setBurgerPopupOpen(false);
    }, []);

    useEffect(() => {
        if (localStorage.jwt) {
            Promise.all([
                mainApi.getUserInfo(localStorage.jwt),
                mainApi.getMovies(localStorage.jwt),
            ])
                .then(([userData, dataMovies]) => {
                    setSavedMovies(dataMovies.reverse());
                    setCurrentUser(userData);
                    setLoggedIn(true);
                    setIsTokenCheck(false);
                })
                .catch((err) => {
                    console.error(
                        `Ошибка при загрузке данных пользователя ${err}`
                    );
                    localStorage.clear();
                });
        } else {
            setLoggedIn(false);
            localStorage.clear();
        }
    }, [loggedIn]);

    function login(email, password) {
        setIsPass(true);
        mainApi
            .authorise(email, password)
            .then((data) => {
                console.log('Response data:', data);
                const token = data && data.token;
                if (token) {
                    localStorage.setItem('jwt', token);
                    setLoggedIn(true);
                    navigate('/', { replace: true });
                } else {
                    console.error('Ошибка авторизации: токен не найден', data);
                }
            })
            .catch((err) => {
                setIsError(true);
                console.error(`Ошибка входа в аккаунт ${err}`);
            })
            .finally(() => setIsPass(false));
    }

    function registration(username, email, password) {
        setIsPass(true);
        mainApi
            .register(username, email, password)
            .then((data) => {
                if (data) {
                    setLoggedIn(true);
                    navigate('/signin', { replace: true });
                }
            })
            .catch((err) => {
                setIsError(true);
                console.error(`Ошибка регистрации ${err}`);
            })
            .finally(() => setIsPass(false));
    }

    function signOut() {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/', { replace: true });
    }

    function updateUserData(username, email) {
        setIsPass(true);
        mainApi
            .setUserInfo(username, email, localStorage.jwt)
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => {
                setIsError(true);
                console.error(`Ошибка редактирования пользователя ${err}`);
            })
            .finally(() => setIsPass(false));
    }

    function deleteMovie(movieId) {
        mainApi
            .deleteMovie(movieId, localStorage.jwt)
            .then(() => {
                setSavedMovies(
                    savedMovies.filter((movie) => {
                        return movie._id !== movieId;
                    })
                );
            })
            .catch((err) => console.error(`Ошибка удаления фильма ${err}`));
    }

    function addMovie(data) {
        const likeMovie = savedMovies.some(
            (element) => data.id === element.movieId
        );
        const seachLikeMovie = savedMovies.filter((movie) => {
            return movie.movieId === data.id;
        });
        if (likeMovie) {
            deleteMovie(seachLikeMovie[0]._id);
        } else {
            mainApi
                .addMovie(data, localStorage.jwt)
                .then((res) => {
                    setSavedMovies([res, ...savedMovies]);
                })
                .catch((err) =>
                    console.error(`Ошибка добавления фильма ${err}`)
                );
        }
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <ErrorContext.Provider value={isError}>
                <div className="body">
                    {isTokenCheck ? (
                        <Preloader />
                    ) : (
                        <div className="page">
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Main
                                            loggedIn={loggedIn}
                                            burgerClick={handleBurgerPopupClick}
                                        />
                                    }
                                />
                                <Route
                                    path="/signin"
                                    element={
                                        <SignIn
                                            login={login}
                                            setIsError={setIsError}
                                            isPass={isPass}
                                        />
                                    }
                                />
                                <Route
                                    path="/signup"
                                    element={
                                        <SignUp
                                            registration={registration}
                                            setIsError={setIsError}
                                            isPass={isPass}
                                        />
                                    }
                                />
                                <Route
                                    path="/movies"
                                    element={
                                        <ProtectedRoute
                                            loggedIn={loggedIn}
                                            element={Movies}
                                            addMovie={addMovie}
                                            savedMovies={savedMovies}
                                            setIsError={setIsError}
                                            burgerClick={handleBurgerPopupClick}
                                            onClose={closeAllPopups}
                                            isOpen={burgerPopupOpen}
                                        />
                                    }
                                />
                                <Route
                                    path="/saved-movies"
                                    element={
                                        <ProtectedRoute
                                            element={SavedMovies}
                                            loggedIn={loggedIn}
                                            savedMovies={savedMovies}
                                            deleteMovie={deleteMovie}
                                            setIsError={setIsError}
                                            burgerClick={handleBurgerPopupClick}
                                            onClose={closeAllPopups}
                                            isOpen={burgerPopupOpen}
                                        />
                                    }
                                />
                                <Route
                                    path="/profile"
                                    element={
                                        <ProtectedRoute
                                            element={Profile}
                                            burgerClick={handleBurgerPopupClick}
                                            onClose={closeAllPopups}
                                            isOpen={burgerPopupOpen}
                                            loggedIn={loggedIn}
                                            signOut={signOut}
                                            updateUserData={updateUserData}
                                            setCurrentUser={setCurrentUser}
                                        />
                                    }
                                />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    )}
                    <BurgerMenu
                        onClose={closeAllPopups}
                        isOpen={burgerPopupOpen}
                    />
                </div>
            </ErrorContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;
