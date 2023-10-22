import '../ActiveButton/ActiveButton.css';
export function ActiveButton({ handleButtonClick }) {
    return (
        <button
            className="activeButton link"
            onClick={handleButtonClick}
        ></button>
    );
}
