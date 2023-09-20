import React, { Children } from 'react'

const Header = ({children}) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default Header
