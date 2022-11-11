import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

function Register() {
  //
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })

  //Destructure the fields
  const { firstName, lastName, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
      toast.success('Register account successfully')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      //spread across the prev state
      ...prevState,
      //get the key whatever the name value is
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className="form_page">
        {' '}
        <form onSubmit={onSubmit}>
          <section className="form_header d-flex justify-content-center">
            <h1>REGISTER </h1>
          </section>

          <section className="form_body">
            {' '}
            <div className="form_group mt-5">
              <input
                type="text"
                className="form_input p-2 mb-2"
                id="firstName"
                name="firstName"
                value={firstName}
                placeholder="Firstname"
                onChange={onChange}
              />
              <label className="form_label">Firstname</label>
            </div>
            <div className="form_group">
              <input
                type="text"
                className="form_input p-2 mb-2"
                id="lastName"
                name="lastName"
                value={lastName}
                placeholder="Lastname"
                onChange={onChange}
              />
              <label className="form_label">Lastname</label>
            </div>
            <div className="form_group">
              <input
                type="email"
                className="form_input p-2 mb-2"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={onChange}
              />
              <label className="form_label">Email</label>
            </div>
            <div className="form_group">
              <input
                type="password"
                className="form_input p-2 mb-2"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
              />
              <label className="form_label">Password</label>
            </div>
            <div className="form_group">
              <input
                type="password"
                className="form_input p-2 mb-2"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Confirm password"
                onChange={onChange}
              />
              <label className="form_label">Confirm password</label>
            </div>
            <button type="submit" className="auth_btn">
              Register
              <div className="arrow_wrapper">
                <div className="arrow"> </div>
              </div>
            </button>
          </section>

          <section className="form_footer mt-3 d-flex justify-content-center">
            <span>Have an account already?</span>
            <Link className="ms-3" to="/login">
              Login
            </Link>
          </section>
        </form>
      </div>
    </>
  )
}

export default Register
