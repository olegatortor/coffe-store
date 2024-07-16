import Links from './Links';

import './header.scss';

const Header = (props) => {

    return (
        <div className='header__section' style={{background: `url('./res/img/${props.img}.jpg') center center/cover no-repeat`}}>
            <header className='header'>
                <Links/>
            </header>

            {props.children}
        </div>
    )
}

export default Header;