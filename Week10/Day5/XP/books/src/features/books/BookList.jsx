import { useState } from "react"
import { useFiction, useHorror, useFantasy } from "./bookHooks"

const BookList = (props) => {
    const [genre, setGenre] = useState('Fiction')
    const fiction = useFiction()
    const horror = useHorror()
    const fantasy = useFantasy()

    return(
        <div>
            <select name="Category" onChange={(e) => setGenre(e.target.value)}>
                <option value="Fiction">Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
            </select>    
            {genre ==='Fiction' ? fiction.map(book => {
                return(
                    <div key={book.id}>
                        <p>{book.title}</p>
                    </div>
                )
            }) : genre === 'Fantasy' ? fantasy.map(book =>{
                return(
                    <div key={book.id}>
                        <p>{book.title}</p>
                    </div>
                )
            }) : horror.map(book =>{
                return(
                    <div key={book.id}>
                        <p>{book.title}</p>
                    </div>
                )
            })}        
        </div>
    )
}

export default BookList