import { useState } from 'react'
import { Wrapper } from '../assets/wrappers/Search'
import { MdSearch } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../features/userSlice'
import { useEffect } from 'react'
const Search = () => {
  const { error, requests } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user) {
      dispatch(searchUser(user))
    }
  }
  useEffect(() => {
    dispatch(searchUser('mahamatoumaroumate'))
  }, [])
  return (
    <>
      {error.show && (
        <p
          style={{
            fontSize: '1.3rem',
            color: 'maroon',
            textAlign: 'center',
            padding: '1rem 0',
          }}
        >
          {error.msg}
        </p>
      )}
      <Wrapper>
        <div className='section-center'>
          <MdSearch />
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Enter Github User'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && <button className='btn'>search</button>}
          </form>
        </div>
        <h3>Request: {requests}/60</h3>
      </Wrapper>
    </>
  )
}
export default Search
