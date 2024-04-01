import { Link } from 'react-router-dom'
import img from '../assets/login.svg'
import { Wrapper } from '../assets/wrappers/Login'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Wrapper>
      <section>
        <img src={img} alt='login' />
        <h2>Github User</h2>
        <button onClick={loginWithRedirect}>LOG IN / SIGN UP</button>
      </section>
    </Wrapper>
  )
}
export default Login
