import React from 'react'
import Layout from './../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign: 'center',
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:'2rem'
        },
        "& p":{
          textAlign: "justify"
        },
        "@media (max-width:600px)" :{
          mt:0,
          "& h4":{
            fontSize: "1.3rem",
          }
        },
      }}>
      <Typography variant='h4'>
      Welcome to My Resturant
      </Typography>
      <p>A restaurant (sometimes known as a diner) is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal.

      Some restaurants are a chain, meaning that there are restaurants which have the same name and serve the same food. McDonald's, Burger King, and Pizza Hut are examples of chain restaurants that are all over the world. .</p>
      <br />
      <p>Experience unparalleled luxury at this premium property offering well-appointed rooms, an incredible restaurant, a full-service spa and a host of upscale amenities.

      Rejuvenate your mind and body with holistic therapies at the on-site spa, Zivaya.
      Enjoy a refreshing swim in the sparkling swimming pool.
      Satiate your palate with international, Indian and local cuisines at the on-site restaurant, The Square.</p>
      </Box>
    </Layout>
  )
}

export default About
