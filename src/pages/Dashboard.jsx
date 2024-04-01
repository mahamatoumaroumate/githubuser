import { useDispatch, useSelector } from 'react-redux'
import { Wrapper } from '../assets/wrappers/Dashboard'
import { Info, Navbar, Repos, Search, User } from '../components'
import img from '../assets/preloader.gif'
import { useEffect } from 'react'
import { checkRequest } from '../features/userSlice'
const Dashboard = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((store) => store.user)
  useEffect(() => {
    dispatch(checkRequest())
  }, [])
  if (loading) {
    return (
      <Wrapper>
        <Navbar />
        <Search />
        <div className='loading'>
          <img src={img} alt='loading' />
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </Wrapper>
  )
}
export default Dashboard
