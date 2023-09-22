import React from 'react'
import Layout from './../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Banner from "../images/banner3.jpg"
import "../styles/HomeStyle.css"

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headercontainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link>
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
