import { useCallback, useEffect, useState } from 'react';

import useMainServices from '../../services/MainServices';
import Filters from './Filters';
import Product from './Product';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './goods.scss'
import Spinner from '../spinner/Spinner';

const Goods = () => {
    const {error, loading, clearError, getAllProducts} = useMainServices();

    const [allProducts, setallProducts] = useState([]);
    const [goods, setGoods] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [country, setCountry] = useState('all');

    const getRequest = useCallback(() => {
      try {
        getAllProducts().then(onChangeList)
      } catch(e) {
        console.error(e)
      }
    }, [clearError])

    const onChangeList = (products) => {
        clearError()
        setallProducts(products)
        setGoods(products)
    }
    
    useEffect(() => {
      getRequest()
    }, [])


    useEffect(() => {
      setGoods(allProducts.filter(item => {
          return(
            item.name.toLowerCase().includes(searchItem.toLowerCase()) && (item.country === country || country === 'all')
          )}))
    }, [searchItem, country, allProducts])



    const changeProductsList = (country) => {
      setCountry(country)
      
      if (country === 'all') {
        clearProductsList()
        return setGoods(allProducts)
      }

      setGoods(allProducts.filter(item => item.country === country))
    }

    const clearProductsList = () => {
      setGoods(allProducts);
      setSearchItem('');
    }

    const searchData = (term) => {
      setSearchItem(term)
    }

    const load = loading ? <Spinner/> : null;
    const problem = error ? <ErrorMessage/> : null;
    const items = !loading && !error ? <View goods={goods}/> : null;

    return(
        <>
            <Filters setProducts={changeProductsList} 
                     clearProductsList={clearProductsList}
                     searchData={searchData}/>
                     
            
            {load}
            {problem}
            {items}
        </>
    )
};

const View = ({goods}) => {
  return(
    <>
        <div className='products__list'>
            {goods.map(product => <Product product={product} key={product.id}/>)}
        </div>
    </>
)
}

export default Goods