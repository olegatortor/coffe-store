import Links from './Links';

import './header.scss';

const Header = (props) => {

    return (
        <div className='header__section'>
            <header className='header'>
                <Links/>
            </header>

            {props.children}
        </div>
    )
}

export default Header;