import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import useMainServices from "../services/MainServices";

import Header from "../components/header/Header";
import Info from '../components/info/Info';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';

import withLoadingAndError from "../components/hoc/withLoadingAndError";

const SingleProduct = () => {
    const {error, loading, clearError, getSoloProducts} = useMainServices();
    const {productsId} = useParams();

    const [product, setProduct] = useState({})

    const getRequest = useCallback(() => {
        try {
            getSoloProducts(productsId).then(onChangeProduct)
        } catch(e) {
          console.error(e)
        }
      }, [clearError])

    const onChangeProduct = (item) => {
        clearError()
        setProduct(item)
    }

    useEffect(() => {
        getRequest()
    }, [])


    const ViewWithLoadingAndError = withLoadingAndError(View)

    return (
        <>
            <Header img="./../res/img/product.jpg">
                <div className="header__relative header__relative-mini">
                    <div className="header__main">
                    <h1>Our Coffee</h1>
                    </div>
                </div>
            </Header>

            <Link to='../products' className="back">BACK</Link>

            <ViewWithLoadingAndError product={product}
                                     error={error}
                                     loading={loading}/>

            <Footer/>
        </>
    )
}

const View = ({product}) => {
    return(
      <>
          <Info component={<Card
                            country={product.country}
                            desc={product.description}
                            price={product.price}/>}
                            img={`../res/img/${product.src}.jpg`}/>
      </>
  )
}

export default SingleProduct