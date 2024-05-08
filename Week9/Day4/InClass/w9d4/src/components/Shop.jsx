import { Link } from "react-router-dom"

const Shop = (props) => {
    return(
        <>
        <div>
            {" "}
            <h2>Product1</h2>
            <Link to='/product/1'>Buy</Link>
        </div>
        <div>
            {" "}
            <h2>Product2</h2>
            <Link to='/product/2'>Buy</Link>
        </div>
        </>
    )
}

export default Shop