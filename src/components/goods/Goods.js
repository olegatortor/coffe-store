import { useCallback, useEffect, useState } from 'react';

import useMainServices from '../../services/MainServices';
import Filters from './Filters';
import Product from './Product';

import withLoadingAndError from '../hoc/withLoadingAndError';

import './goods.scss'

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
    }

    const searchData = (term) => {
      setSearchItem(term)
    }

    const ViewWithLoadingAndError = withLoadingAndError(View)

    return(
        <>
            <Filters setProducts={changeProductsList} 
                     clearProductsList={clearProductsList}
                     searchData={searchData}/>
                     
            {<ViewWithLoadingAndError  goods={goods}
                                       loading={loading}
                                       error={error}/>}
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