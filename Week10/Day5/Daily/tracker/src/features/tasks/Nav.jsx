import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
        <div>
            <h1>Home</h1>
            <Link to={'/tasks'}><button>Tasks</button></Link>
            <Link to={'/categories'}><button>Categories</button></Link>
        </div>
    )
}

export default Nav