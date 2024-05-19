import { useRef } from "react"
import { addCat, removeCat } from "./taskSlice"
import { useCategories } from "./taskHooks"
import { useDispatch } from "react-redux"

const CategoriesEditer = (props) =>{
    const catRef = useRef()
    const cats = useCategories()
    const dispatch = useDispatch()

    return(
        <div>
            <h2>Categories Editor</h2>
            <input placeholder="Category" ref={catRef}/> <br />
            <button onClick={() => dispatch(addCat(catRef.current.value))}>Add Category</button> <br />
            {cats.map(cat => {
                return(
                    <div key={cat.id}>
                        <p>{cat.name}</p>
                        <button onClick={() => dispatch(removeCat({id: cat.id, name: cat.name}))}>Remove Category</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoriesEditer