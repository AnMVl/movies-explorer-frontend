import '../ActiveButton/ActiveButton.css';
export function ActiveButton({ handleButtonClick }) {
    return (
        <button
            className="active-button link"
            onClick={handleButtonClick}
        ></button>
    );
}
