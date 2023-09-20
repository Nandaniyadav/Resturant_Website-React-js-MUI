import React, { Children } from 'react'
import Header from '../Header'
const Layout = ({Children}) => {
  return (
    <div>
    <Header/>
      <div>{Children}</div>
    </div>
  )
}

export default Layout;
