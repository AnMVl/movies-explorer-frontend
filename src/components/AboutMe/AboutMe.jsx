import '../AboutMe/AboutMe.css';
import AboutMeImage from '../../images/AbouteMeImg.png';
import { Link } from 'react-router-dom';

export function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__content">
                <div className="about-me__text-container">
                    <h3 className="about-me__name">Виталий</h3>
                    <p className="about-me__subtitle">
                        Фронтенд-разработчик, 30 лет
                    </p>
                    <p className="about-me__text">
                        Я родился и живу в Саратове, закончил факультет
                        экономики СГУ. У меня есть жена и дочь. Я люблю слушать
                        музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                        2015 года работал в компании «СКБ Контур». После того,
                        как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <Link
                        to="https://github.com/AntonMVl"
                        target="_blank"
                        className="about-me__button"
                    >
                        Github
                    </Link>
                </div>
                <img
                    className="about-me__img"
                    src={AboutMeImage}
                    alt="Личное фото"
                />
            </div>
        </section>
    );
}
