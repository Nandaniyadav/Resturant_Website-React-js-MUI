import React, { Children } from 'react'
import Header from './Header';
import About from '../../pages/About';
const Layout = ({children}) => {
  return (
    <div>
    <Header/>
    <About/>
      <div>{children}</div>
    </div>
  )
}

export default Layout;


