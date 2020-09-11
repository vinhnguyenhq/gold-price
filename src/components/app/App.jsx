import { ErrorBoundary, Router, Spinner } from 'components'
import * as React from 'react'

const App = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Spinner isLoading />}>
        <Router />
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default App
