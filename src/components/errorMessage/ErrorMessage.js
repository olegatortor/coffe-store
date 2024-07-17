import error from '../../img/error.svg'
import('./error.scss')


const ErrorMessage = () => {
    return(
        <div className='error'>
            <img src={error} alt='error'/>
            <h2>Something was wrong, please, come back later</h2>
        </div>
    )
}

export default ErrorMessage