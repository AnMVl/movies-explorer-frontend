import './Techs.css';

export function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
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
