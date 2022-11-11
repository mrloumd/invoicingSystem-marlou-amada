import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

function Login() {
  //
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  //Destructure the fields
  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
      toast.success('Login Successfully')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  return (
    <>
      <div className="form_page">
        {' '}
        <form onSubmit={onSubmit}>
          <section className="form_header d-flex justify-content-center">
            <h1>LOGIN</h1>
          </section>

          <section className="form_body">
            {' '}
            <div className="form_group mt-5">
              <input
                type="email"
                className="form_input p-2 mb-2"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
              <label htmlFor="name" className="form_label">
                Email
              </label>
            </div>
            <div className="form_group">
              <input
                type="password"
                className="form_input p-2 mb-2"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
              <label htmlFor="name" className="form_label">
                Password
              </label>
            </div>
            <button className="auth_btn" type="submit">
              Login
              <div className="arrow_wrapper">
                <div className="arrow"> </div>
              </div>
            </button>
          </section>

          <section className="form_footer mt-3 d-flex justify-content-center">
            <span>Don't have an account?</span>
            <Link className="ms-3" to="/register">
              Register
            </Link>
          </section>
        </form>
      </div>
    </>
  )
}

export default Login
