import { useSelector } from 'react-redux'
import { Wrapper } from '../assets/wrappers/Info'
import { GoRepo } from 'react-icons/go'
import { VscGist } from 'react-icons/vsc'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
const Info = () => {
  const { user } = useSelector((store) => store.user)
  const { public_repos, followers, following, public_gists } = user
  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'Repos',
      value: public_repos,
      color: 'red',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'Followers',
      value: followers,
      color: 'green',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'Following',
      value: following,
      color: 'blue',
    },
    {
      id: 4,
      icon: <VscGist className='icon' />,
      label: 'Gists',
      value: public_gists,
      color: 'pink',
    },
  ]
  return (
    <Wrapper>
      <section className='items'>
        {items.map((item) => {
          return <Item key={item.id} {...item} />
        })}
      </section>
    </Wrapper>
  )
}
const Item = ({ icon, id, value, color, label }) => {
  return (
    <div className='item' key={id}>
      <article>
        <span className={color}>{icon}</span>
        <section>
          <h2>{value}</h2>
          <h3>{label}</h3>
        </section>
      </article>
    </div>
  )
}
export default Info
