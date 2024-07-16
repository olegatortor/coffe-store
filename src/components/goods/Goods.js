import { useEffect, useState } from 'react';

import Filters from './Filters';
import Product from './Product';

import './goods.scss'

const Goods = () => {
    const ourProducts = [
        {
          id: 1,
          name: 'Solimo Coffee Beans 2 kg',
          src: 'best1',
          country: 'Kenya',
          price: 10.73,
        },
        {
          id: 2,
          name: 'Presto Coffee Beans 1 kg',
          src: 'best2',
          country: 'Kenya',
          price: 15.99,
        },
        {
          id: 3,
          name: 'AROMISTICO Coffee 1 kg',
          src: 'best3',
          country: 'Brazil',
          price: 6.99,
        },
        {
          id: 4,
          name: 'BROMISTICO Coffee 1 kg',
          src: 'best1',
          country: 'Columbia',
          price: 6.99,
        },
        {
          id: 5,
          name: 'BROMISTICO Coffee 1 kg',
          src: 'best3',
          country: 'Brazil',
          price: 6.99,
        },
        {
          id: 6,
          name: 'ISTICO Coffee 1 kg',
          src: 'best2',
          country: 'Kenya',
          price: 6.99,
        },
        {
          id: 7,
          name: 'AROMIS Coffee 1 kg',
          src: 'best2',
          country: 'Kenya',
          price: 6.99,
        },
        {
          id: 8,
          name: 'AROO Coffee 1 kg',
          src: 'best1',
          country: 'Brazil',
          price: 6.99,
        },
        {
          id: 9,
          name: 'ICO Coffee 1 kg',
          src: 'best3',
          country: 'Columbia',
          price: 6.99,
        }
      ]


    const [goods, setGoods] = useState(ourProducts)
    const [searchItem, setSeachItem] = useState('')


    const changeProductsList = (country) => {
      setGoods(ourProducts.filter(item => item.country === country))
    }

    const clearProductsList = () => {
      setGoods(ourProducts);
      setSeachItem('');
    }

    const searchData = (term) => {
      setSeachItem(term)
    }

    useEffect(() => {
      setGoods(ourProducts.filter(item => {
          return(
            item.name.toLowerCase().includes(searchItem.toLowerCase())
          )}))
    }, [searchItem])


    return(
        <>
            <Filters setProducts={changeProductsList} 
                     clearProductsList={clearProductsList}
                     searchData={searchData}/>

            <div className='products__list'>
                {goods.map(product => <Product product={product} key={product.id}/>)}
            </div>
        </>
    )
};

export default Goods