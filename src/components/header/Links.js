import { NavLink } from 'react-router-dom';

import './header.scss';

const Links = ({color}) => {
    const clazz = color ? color : null;
    
    const isActive = ({isActive}) => ({color: isActive ? '': color});

    return (
        <ul className={clazz}>
            <li><NavLink to="/" style={isActive} className='logo'>Coffee house</NavLink></li>
            <li><NavLink to="/" style={isActive}>Голова</NavLink></li>
            <li><NavLink to="/products" style={isActive}>Асортимент</NavLink></li>
            <li><NavLink to="/info" style={isActive}>Новини</NavLink></li>
            <li><NavLink to="/info" style={isActive}>Контакти</NavLink></li>
        </ul>
    );
}

export default Links;