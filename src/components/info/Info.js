import About from "../about/About";

import './info.scss';

const Info = ({component, img}) => {
    return (
        <div className="info">
            <img src={img}/>
            <About width="350" title="About our beans">
                {component}
            </About>
        </div>
    )
}

export default Info;