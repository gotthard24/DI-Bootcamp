import { Link } from "react-router-dom"

const Nav = () =>{
    return(
        <header>
            <Link to='/'>Home{' '}</Link>
            <Link to='/about'>About{' '}</Link>
            <Link to='/contact'>Contact{' '}</Link>
            <Link to='/shop'>Shop{' '}</Link>
        </header>
    )
}

export default Nav
