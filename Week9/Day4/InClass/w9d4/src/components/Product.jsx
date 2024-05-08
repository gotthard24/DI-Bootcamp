import { useParams } from "react-router-dom"

const Product = (props) => {
    const params = useParams()
    console.log(params);
    return(
        <>
            <h2>Product</h2>
        </>
    )
}

export default Product