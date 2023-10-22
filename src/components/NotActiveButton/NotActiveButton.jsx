import './NotActiveButton.css';
export function NotActiveButton({ handleButtonClick }) {
    return (
        <button className="notActiveButton link" onClick={handleButtonClick}>
            Сохранить
        </button>
    );
}
