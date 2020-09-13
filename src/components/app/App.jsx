import './App.less'

import { ErrorBoundary, Router } from 'components'
import * as React from 'react'

const App = () => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  )
}

export default App
