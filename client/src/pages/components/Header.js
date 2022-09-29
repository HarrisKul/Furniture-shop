import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    const loggedIn = props.loggedIn

    return (
        <div className="container">
            <header className="">
            <Link to="/" className="">
              <img src='https://logos-world.net/wp-content/uploads/2021/03/GoFundMe-Logo-2019-2021.png'></img>
            </Link>
        
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Main</Link>
                </li>
                <li className="nav-item">
                    <Link to="/posts" className="nav-link" aria-current="page">Fundraise</Link>
                </li>
             
                {loggedIn ?  (

                    <>
                             <li className="nav-item">
                    <Link to="/new-post" className="nav-link" aria-current="page">Add new book</Link>
                </li>
                <li className="nav-item">
                    <Link to='/logout' className="nav-link"
                     aria-current="page">Logout</Link>
                </li>
            
                    </>
           
            ) : (
            <>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" aria-current="page">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link" aria-current="page">Login</Link>
                </li>
                </>
                  )}
            </ul>
            </header>
        </div>
    
    )
}

export default Header