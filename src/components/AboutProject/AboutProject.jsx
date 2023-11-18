import '../AboutProject/AboutProject.css';

export function AboutProject() {
    return (
        <section className="about-project" id={'about-project'}>
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__info-container">
                <div className="about-project__text-box">
                    <h3 className="about-project__info-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__info-text">
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__text-box">
                    <h3 className="about-project__info-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__info-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__time-container">
                <div className="about-project__time-indicator about-project__time-indicator_color_green">
                    <p className="about-project__indicator-text">1 неделя</p>
                </div>
                <div className="about-project__time-indicator">
                    <p className="about-project__indicator-text">4 недели</p>
                </div>
                <p className="about-project__time-sign">Back-end</p>
                <p className="about-project__time-sign">Front-end</p>
            </div>
        </section>
    );
}
