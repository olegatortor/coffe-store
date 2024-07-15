import './best.scss'

const Best = ({ data }) => {
    return(
        <div className='best'>
            <h2>Our best</h2>

            <div className='best__container'>
                {
                    data.map(product => 
                        (<div className='best__item' key={product.id}>
                            <img src={`./res/img/${product.src}.jpg`} alt={product.name} />
                            <h3>{product.name}</h3>
                            <span>{product.price}$</span>
                        </div>))
                }
            </div>
        </div>
    )
}

export default Best;