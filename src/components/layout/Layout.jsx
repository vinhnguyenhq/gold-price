import * as React from 'react'

const Layout = ({ className, children, ...restProps }) => {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  )
}

export default Layout
