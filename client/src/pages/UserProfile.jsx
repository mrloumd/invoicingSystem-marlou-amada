import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AddBlogModal from '../components/reusableComponents/AddBlogModal'
import UserBlogItem from '../components/reusableComponents/UserBlogItem'
import Spinner from '../components/reusableComponents/Spinner'
import { getBlogs } from '../features/blogs/blogSlice'
import { reset } from '../features/auth/authSlice'
import { StyledPage } from '../components/styledComponents/dashboardPage'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs,
  )

  const orderedBlogs = blogs
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getBlogs())

    return () => {
      dispatch(reset())
    }
  }, [user, isError, message, navigate, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <StyledPage>
      <div className="userBlog-container mt-5 m-auto">
        {/* <section className="heading">
          <h1>
            Welcome {user && user.firstName} {user && user.lastName}
          </h1>
          <p>Blogs Dashboard</p>
        </section> */}

        <section className="blogs-container addBlog m-auto ">
          {' '}
          <AddBlogModal />
        </section>

        <section className="blogs-container m-auto">
          {blogs.length > 0 ? (
            <div>
              {orderedBlogs.map((blog) => (
                <UserBlogItem key={blog._id} blog={blog} />
              ))}
            </div>
          ) : (
            <h3>You have not set any blogs</h3>
          )}
        </section>
      </div>
    </StyledPage>
  )
}

export default Dashboard
