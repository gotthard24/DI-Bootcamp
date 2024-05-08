import { useState, useEffect } from "react"
import { useParams, Link, useNavigate} from 'react-router-dom'

const Product = (props) => {
    const [product,setProduct] = useState([])
    const params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        info()
        // back()
    },[])

    const info = async() =>{
        try {
            const res = await fetch(`http://localhost:3001/api/products/${params.id}`)
            const data = await res.json()
            setProduct(data)
        } catch (error) {
            // back()
            console.log(error);
        }
    }

    const back = () =>{
        navigate('/')
    }

    return(
        <>
            <h2>Product</h2>
            {
                product.map(item =>{
                    return(<div>
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                        <Link to={'/'}>Back</Link>
                        {/* <button onClick={back}>Back</button> */}
                    </div>)
                })
            }
        </>
    )
}

export default Product