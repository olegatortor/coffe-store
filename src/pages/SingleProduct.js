import { useParams } from "react-router-dom"


const SingleProduct = () => {
    const {productsId} = useParams();
    console.log(productsId)

    return (
        <h1>{productsId}</h1>
    )
}

export default SingleProduct