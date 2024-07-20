import Beans from "../beans/Beans"

import './about.scss'

const About = (props) => {
    const clazz = props.width == 590 ? "about__padding" : "";

    return (
        <section className={"about " + clazz} style={{width: `${props.width}px`}}>
            <h1>{props.title}</h1>
            <Beans/>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default About;