import './DeleteMovieButton.css';

export function DeleteMovieButton({ deleteMovie, data }) {
    return (
        <button
            className="delete-movie-button link"
            onClick={() => deleteMovie(data._id)}
            type="button"
        ></button>
    );
}
