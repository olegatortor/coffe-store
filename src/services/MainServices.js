import { useHttp } from '../hooks/http.hook'

const useMainServices = () => {
    const [error, request, loading, clearError] = useHttp();

    const getAllProducts = async() => {
        const res = await request('./db.json');
        return res.products.map(_transformProducts)
    }

    const getSoloProducts = async(productsId) => {
        const res = await request('../db.json').then(res => res.products.filter(item => item.name === productsId));
        return _transformSoloProducts(res[0])
    }

    const _transformProducts = (products) => {
        return {
            "id": products.id,
            "name": products.name,
            "src": products.src,
            "country": products.country,
            "price": products.price
        }
    }

    const _transformSoloProducts = (product) => {
        return {
            "id": product.id,
            "name": product.name,
            "src": product.src,
            "country": product.country,
            "price": product.price,
            "description": product.description,
        }
    }


    return {
        error, 
        request, 
        loading, 
        clearError,
        getAllProducts,
        getSoloProducts
    }
}

export default useMainServices;