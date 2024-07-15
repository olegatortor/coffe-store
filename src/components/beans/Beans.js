import beans from '../../img/coffee-beans.svg'
import beansBlack from '../../img/coffee-beans-black.svg'

const Beans = ({color}) => {
    const beansImg = color ? beans : beansBlack;

    return (
        <div className={`beans ${color}`}>
            <div></div>
            <img src={beansImg} alt='beans'/>
            <div></div>
        </div>
    );
}

export default Beans;