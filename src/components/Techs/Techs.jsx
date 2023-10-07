import './Techs.css';

export function Techs() {
    return (
        <section className="techs">
            <div className="techs__title-container">
                <h3 className="techs__title">Технологии</h3>
            </div>
            <h2 className="techs__subtitle">7 технологий</h2>
            <p className="techs__text">
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
            </p>
            <ul className="techs__mudules">
                <li className="techs__mudules-text">HTML</li>
                <li className="techs__mudules-text">CSS</li>
                <li className="techs__mudules-text">JS</li>
                <li className="techs__mudules-text">React</li>
                <li className="techs__mudules-text">Git</li>
                <li className="techs__mudules-text">Express.js</li>
                <li className="techs__mudules-text">mongoDB</li>
            </ul>
        </section>
    );
}
