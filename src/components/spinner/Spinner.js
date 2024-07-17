import { SyncLoader } from 'react-spinners'

const Spinner = () => {
    return(
        <div className='spinner'>
            <SyncLoader 
                size='20'
                margin='5'
                color='rgba(169, 169, 169, 1)'/>
        </div>
    )
}

export default Spinner;