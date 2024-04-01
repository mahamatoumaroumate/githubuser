import { useAuth0 } from '@auth0/auth0-react'
import { Wrapper } from '../assets/wrappers/AuthWrapper'
import img from '../assets/preloader.gif'
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return (
      <Wrapper>
        <img src={img} alt='logo' />
      </Wrapper>
    )
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    )
  }
  return <>{children}</>
}
export default AuthWrapper
