import { SyncLoader } from 'react-spinners'

const Spinner = () => {
    return(
        <div className='spinner'>
            <SyncLoader 
                size='20px'
                margin='5px'
                color='rgba(169, 169, 169, 1)'/>
        </div>
    )
}

export default Spinner;