import { useSelector } from 'react-redux'
import { Wrapper } from '../assets/wrappers/Followers'

const Followers = () => {
  const { followers } = useSelector((store) => store.user)
  return (
    <Wrapper>
      <article className='followers'>
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower
          return (
            <section key={index}>
              <img src={img} alt='follower' />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </section>
          )
        })}
      </article>
    </Wrapper>
  )
}
export default Followers
