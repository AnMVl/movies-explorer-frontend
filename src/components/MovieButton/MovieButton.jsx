import './MovieButton.css';
export function MovieButton({ click, handleClick }) {
    return (
        <button
            className={`movie-button link ${
                click ? 'movie-button_type_active' : ''
            }`}
            onClick={handleClick}
            type="button"
        >
            {click ? '' : 'Сохранить'}
        </button>
    );
}
