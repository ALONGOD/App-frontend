import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'


export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()

    async function onLogout() {
        try {
            await logout()
            navigate('/')
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }

    return (
        <header className="app-header full">
            <nav>
                <NavLink to="/" className="logo">
                <img src="https://res.cloudinary.com/dpoa9lual/image/upload/v1731568843/Screenshot_2024-11-14_at_9.19.24_xhqcwh.png" alt="Yoga Products Logo" />
                </NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="product">Products</NavLink>
                <NavLink to="women">Women</NavLink>
                <NavLink to="men">Men</NavLink>
                <NavLink to="shoes">Shoes</NavLink>
                <NavLink to="accessories">Accessories</NavLink>
                {/* <NavLink to="chat">Chat</NavLink> */}
                {/* <NavLink to="review">Review</NavLink> */}
                <NavLink to="cart">Cart</NavLink>

                {user?.isAdmin && <NavLink to="/admin">Admin</NavLink>}

                {!user && <NavLink to="login" className="login-link">Login</NavLink>}
                {user && (
                    <div className="user-info">
                        <Link to={`user/${user._id}`}>
                            {/* {user.imgUrl && <img src={user.imgUrl} />} */}
                            {user.fullname}
                        </Link>
                        {/* <span className="score">{user.score?.toLocaleString()}</span> */}
                        <button onClick={onLogout}>logout</button>
                    </div>
                )}
            </nav>
        </header>
    )
}
