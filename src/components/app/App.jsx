import { ErrorBoundary, Router, Spinner } from 'components'
import * as React from 'react'

const App = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <React.Suspense fallback={<Spinner isLoading />}>
          <Router />
        </React.Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  )
}

export default App
