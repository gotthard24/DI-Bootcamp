import { Link } from "react-router-dom"
import { useState } from "react"

const Nav = () =>{
    const [search, setSearch] = useState('')
    return(
        <header>
            <h1>Snapshot</h1>
            <form action="">
                <input onChange={(e) => setSearch(e.target.value)} name="search"/>
                <Link to={`/search/${search}`}><button>Search{' '}</button></Link>
            </form>
            <br />
            <Link to='/mountain'><button>Mountains{' '}</button></Link>
            <Link to='/forest'><button>Forests{' '}</button></Link>
            <Link to='/dog'><button>Dogs{' '}</button></Link>
            <Link to='/parrot'><button>Parrots{' '}</button></Link>
        </header>
    )
}

export default Nav