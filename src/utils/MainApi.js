class MainApi {
    constructor({ url }) {
        this._url = url;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    register(username, email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                email: email,
                password: password,
            })
        })
        .then(this._checkResponse)
    }

    authorise(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(this._checkResponse)
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(this._checkResponse)
    }

    setUserInfo(username, email, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({
                name: username,
                email: email,
            })
        })
        .then(this._checkResponse)
    }

    getMovies(token) {
        return fetch(`${this._url}/movies`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(this._checkResponse)
    }

    addMovie(data, token) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                description: data.description,
                year: data.year,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
            })
        }).then(this._checkResponse)
    }

    deleteMovie(movieId, token) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
            "Authorization" : `Bearer ${token}`
            }
        })
        .then(this._checkResponse)
    }
}

const mainApi = new MainApi({
    url: 'https://amoro-diplom.nomoredomainsrocks.ru',
    // url: 'http://localhost:3001'
});

export default mainApi
