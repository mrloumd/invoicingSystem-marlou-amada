import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { logout, reset } from '../features/auth/authSlice'
import {
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
  FaBookOpen,
  FaClipboardList,
} from 'react-icons/fa'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    toast.success('Account Logout')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="/">
            Invoicing System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5  mb-2 mb-lg-0">
              {user ? (
                <>
                  <li className="nav-item me-4">
                    <Link className="nav-link active nav-btn" to="/">
                      <FaClipboardList /> Products
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link className="nav-link active nav-btn" to="/invoicePage">
                      <FaBookOpen /> Invoice Page
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <button
                      className="nav-link active nav-btn"
                      onClick={onLogout}
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item me-4">
                    <Link className="nav-link active nav-btn" to="/login">
                      <FaSignInAlt /> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active nav-btn" to="/register">
                      <FaUser /> Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
