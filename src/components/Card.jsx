import { useSelector } from 'react-redux'
import { Wrapper } from '../assets/wrappers/Card'
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Card = () => {
  const { user } = useSelector((store) => store.user)
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = user

  return (
    <Wrapper>
      <section>
        <article>
          <img src={avatar_url} alt='user' />
          <div className='info'>
            <h3>{name}</h3>
            <h4>@{twitter_username || 'john doe'}</h4>
          </div>
        </article>
        <a href={`https://${blog}`} className='follow'>
          Follow
        </a>
      </section>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <span>
          <MdBusiness /> {company}
        </span>
        <span>
          <MdLocationOn /> {location || 'earth'}
        </span>
        <a href={`http://${bio}`} className='twitter'>
          <span>
            <MdLink />
            {blog}
          </span>
        </a>
      </div>
    </Wrapper>
  )
}
export default Card
