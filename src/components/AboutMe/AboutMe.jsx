import '../AboutMe/AboutMe.css';
import AboutMeImage from '../../images/AbouteMeImg.png';

export function AboutMe() {
    return (
        <section className="aboutMe">
            <div className="aboutMe__title-container">
                <h3 className="aboutMe__title">Студент</h3>
            </div>
            <div className="aboutMe__content">
                <div className="aboutMe__text-container">
                    <h3 className="aboutMe__name">Виталий</h3>
                    <p className="aboutMe__subtitle">
                        Фронтенд-разработчик, 30 лет
                    </p>
                    <p className="aboutMe__text">
                        Я родился и живу в Саратове, закончил факультет
                        экономики СГУ. У меня есть жена и дочь. Я люблю слушать
                        музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
                        2015 года работал в компании «СКБ Контур». После того,
                        как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <button className="aboutMe__button">Github</button>
                </div>
                <img
                    className="aboutMe__img"
                    src={AboutMeImage}
                    alt="Личное фото"
                />
            </div>
        </section>
    );
}
