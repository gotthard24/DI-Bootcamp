import { useState } from "react"
import { useFiction, } from "./bookHooks"

const BookList = (props) => {
    const [genre, setGenre] = useState('Fiction')
    const books = useFiction(genre)

    return(
        <div>
            <select name="Category" onChange={(e) => setGenre(e.target.value)}>
                <option value="Fiction">Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
            </select>    
            {books.map(book => {
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