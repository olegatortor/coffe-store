import { Link } from 'react-router-dom';

import './header.scss';

const Links = ({color}) => {
    const clazz = color ? color : null;

    return (
        <ul className={clazz}>
            <li><Link to="/">Coffee house</Link></li>
            <li><Link to="/products">Our coffee</Link></li>
            <li><Link to="/info">For your pleasure</Link></li>
        </ul>
    );
}

export default Links;