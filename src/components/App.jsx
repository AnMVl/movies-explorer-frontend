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
import { useCallback, useEffect, useState } from 'react';

function App() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [burgerPopupOpen, setBurgerPopupOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [savedMovies, setSavedMovies] = useState([]);

    function handleBurgerPopupClick() {
        setBurgerPopupOpen(true);
    }

    const closeAllPopups = useCallback(() => {
        setBurgerPopupOpen(false);
    }, []);

    useEffect(() => {
        tokenCheck();
    }, []);

    const tokenCheck = () => {
        if (localStorage.getItem('jwt')) {
            const jwt = localStorage.getItem('jwt');
            if (jwt) {
                Promise.all([mainApi.getUserInfo(jwt), mainApi.getMovies(jwt)])
                    .then(([userData, dataMovies]) => {
                        setLoggedIn(true);
                        setSavedMovies(dataMovies);
                        setCurrentUser(userData);
                    })
                    .catch((error) => {
                        console.log(`Ошибка проверки токена - ${error}`);
                    });
            }
        }
    };

    function login(email, password) {
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
                    console.error(
                        'Ошибка авторизации: токен не найден в данных',
                        data
                    );
                }
            })
            .catch((err) => {
                console.error(`Ошибка авторизации ${err}`);
            });
    }

    function registration(username, email, password) {
        mainApi
            .register(username, email, password)
            .then((data) => {
                if (data) {
                    setLoggedIn(true);
                    navigate('/signin', { replace: true });
                }
            })
            .catch((err) => {
                console.error(`Ошибка регистрации ${err}`);
            });
    }

    function signOut() {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/', { replace: true });
    }

    function updateUserData(username, email) {
        mainApi
            .setUserInfo(username, email, localStorage.jwt)
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((err) => {
                console.error(`Ошибка при редактировании пользователя ${err}`);
            });
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
                    console.error(`Ошибка добавлении фильма ${err}`)
                );
        }
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
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
                            element={<SignIn login={login} />}
                        />
                        <Route
                            path="/signup"
                            element={<SignUp registration={registration} />}
                        />
                        <Route
                            path="/movies"
                            element={
                                <ProtectedRoute
                                    element={Movies}
                                    loggedIn={loggedIn}
                                    burgerClick={handleBurgerPopupClick}
                                    onClose={closeAllPopups}
                                    isOpen={burgerPopupOpen}
                                    addMovie={addMovie}
                                />
                            }
                        />
                        <Route
                            path="/saved-movies"
                            element={
                                <ProtectedRoute
                                    element={SavedMovies}
                                    loggedIn={loggedIn}
                                    burgerClick={handleBurgerPopupClick}
                                    onClose={closeAllPopups}
                                    isOpen={burgerPopupOpen}
                                    savedMovies={savedMovies}
                                    deleteMovie={deleteMovie}
                                />
                            }
                        />
                        <Route
                            path="/profile"
                            element={
                                <ProtectedRoute
                                    element={Profile}
                                    loggedIn={loggedIn}
                                    burgerClick={handleBurgerPopupClick}
                                    onClose={closeAllPopups}
                                    isOpen={burgerPopupOpen}
                                    signOut={signOut}
                                    updateUserData={updateUserData}
                                />
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <BurgerMenu onClose={closeAllPopups} isOpen={burgerPopupOpen} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
