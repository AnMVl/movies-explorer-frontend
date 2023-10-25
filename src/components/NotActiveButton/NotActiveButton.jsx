import './NotActiveButton.css';
export function NotActiveButton({ handleButtonClick }) {
    return (
        <button className="not-active-button link" onClick={handleButtonClick}>
            Сохранить
        </button>
    );
}
