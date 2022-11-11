import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../features/auth/authSlice'
import axios from 'axios'
import ProductList from '../components/ProductList'

function Dashboard() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get('/api/products/')
        setProducts(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])

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
