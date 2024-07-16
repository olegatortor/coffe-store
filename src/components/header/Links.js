import { NavLink } from 'react-router-dom';

import './header.scss';

const Links = ({color}) => {
    const clazz = color ? color : null;
    
    const isActive = ({isActive}) => ({color: isActive ? 'rgb(144 144 144)': color});

    return (
        <ul className={clazz}>
            <li><NavLink to="/" style={isActive}>Coffee house</NavLink></li>
            <li><NavLink to="/products" style={isActive}>Our coffee</NavLink></li>
            <li><NavLink to="/info" style={isActive}>For your pleasure</NavLink></li>
        </ul>
    );
}

export default Links;