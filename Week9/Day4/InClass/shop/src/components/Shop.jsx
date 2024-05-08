import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const Shop = (props) => {
    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')

    useEffect(() =>{
        getAll()
    }, [])

    const getAll = async() =>{
        try {
            const res = await fetch('http://localhost:3001/api/products')
            const data = await res.json()
            console.log(data);
            setProducts(data)
        } catch (error) {
            console.log(error);
        }
    }

    const addProduct = async(e) =>{
        e.preventDefault()

        const data = {
            name: productName,
            price: productPrice
        }

        try {
            const res = await fetch('http://localhost:3001/api/products', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (res.ok) {
                await getAll();
                setProductName('');
                setProductPrice('');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <h2>Shop</h2>
            <h4>Add product</h4>
            <form onSubmit={(e) => addProduct(e)}>
                <input 
                    placeholder="name" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                /> <br />
                <input 
                    placeholder="price" 
                    value={productPrice} 
                    onChange={(e) => setProductPrice(e.target.value)} 
                /> <br />
                <button type="submit">Submit</button>
            </form>
            {products.map(item=>{
                return (
                    <div key={item.id}>
                        {item.name} {item.price}
                        <Link to={`/${item.id}`}>Buy</Link>
                    </div>
                )
            })}
        </>
    )
}

export default Shop
