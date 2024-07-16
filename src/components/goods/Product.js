import './goods.scss'

const Product = ({product}) => {
    const {name, src, country, price} = product;

    return(
        <div className='products__item'>
            <img src={`./res/img/${src}.jpg`} alt={name}/>
            <div className='products__item-name'>{name}</div>
            <div className='products__item-country'>{country}</div>
            <div className='products__item-price'>{price}$</div>
            <button className='products__item-button'>Buy</button>
        </div>
    )
};

export default Product;