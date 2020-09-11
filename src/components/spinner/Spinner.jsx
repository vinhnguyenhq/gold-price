import * as React from 'react'

const Spinner = ({ isLoading }) => {
  return <React.Fragment>{isLoading && <div>Loading ...</div>}</React.Fragment>
}

export default Spinner
