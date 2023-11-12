class MoviesApi {
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

    getMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
        }).then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi