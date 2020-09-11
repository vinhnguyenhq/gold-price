import * as React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.toString() }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
