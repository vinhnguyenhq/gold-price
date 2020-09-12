import { Button } from 'antd'
import { Layout } from 'components'
import { decrement, increment, selectCount } from 'models/gold'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = ({ title = 'Home' }) => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  console.log(count, dispatch, decrement, increment)

  return (
    <Layout>
      {title}
      <Button type="default" onClick={() => dispatch(increment())}>
        increment
      </Button>
    </Layout>
  )
}

export default Home
