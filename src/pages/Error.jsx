import { Wrapper } from "../assets/wrappers/Error"
import img from '../assets/not-found.svg'
import { Link } from "react-router-dom"

const Error = () => {

  return <Wrapper>
      <section>
        <img src={img} alt="not-found" />
        <h3>Ohh!!! Page Not Found</h3>
        <Link to='/'>Back Home</Link>
      </section>
  </Wrapper>
}
export default Error
