import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../features/auth/authSlice'
import { getProducts } from '../features/products/productSlice'

import ProductList from '../components/ProductList'
import Spinner from '../components/Spinner'

function Dashboard() {
  // const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products,
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getProducts())

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, navigate, dispatch])

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     try {
  //       const { data } = await axios.get('/api/products/')
  //       setProducts(data)
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getAllProducts()
  // }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className="product_card">
        {products.map((product) => (
          <ProductList key={product._id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Dashboard
