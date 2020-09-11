import { decrement, increment, selectCount } from 'models/gold'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Home = ({ title = 'Home' }) => {
  let history = useHistory()
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  console.log(count, dispatch, decrement, increment, history)

  const handleClick = () => {
    history.push('/about')
  }

  return (
    <React.Fragment>
      <div>{title}</div>

      <button type="button" onClick={handleClick}>
        click here to go to About page
      </button>

      <br />

      <button type="button" onClick={() => dispatch(increment())}>
        increment
      </button>
    </React.Fragment>
  )
}

export default Home
