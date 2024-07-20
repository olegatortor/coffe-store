import './card.scss'

const Card = ({country, desc, price}) => {
    return(
        <div class="card">  
            <div><span>Country:</span> {country}</div>
            <p><span>Description:</span> {desc}</p>
            <div><span>Price:</span> <span className='price'>{price}$</span></div>
        </div>
    )
}

export default Card;