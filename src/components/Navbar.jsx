import { useAuth0 } from '@auth0/auth0-react'
import { Wrapper } from '../assets/wrappers/Navbar'
const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0()
  const isUser = isAuthenticated && user
  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user?.name} />}
      {isUser && (user.name || user.nickname) && (
        <h4>
          Welcome,{' '}
          <strong>
            {user?.name.toUpperCase() || user?.nickname.toUpperCase()}
          </strong>
        </h4>
      )}
      {isUser ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </Wrapper>
  )
}
export default Navbar
