import React from 'react'
import Layout from '../components/Layout/Layout'
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aspernatur temporibus, saepe consequatur veniam repellat corporis itaque amet mollitia, incidunt perspiciatis qui nesciunt consequuntur ipsa officia distinctio nihil assumenda? Eaque?</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsa similique! Tempore quae inventore quas. Eum cumque architecto quod incidunt ullam quae unde aut porro qui, ratione exercitationem quidem, rerum doloribus blanditiis eligendi beatae error atque nostrum ipsam perspiciatis repellendus molestiae sit. Harum, dolores dicta? Consequuntur, eius ipsam, ad magnam soluta modi beatae animi qui, obcaecati tenetur sequi molestias. Tempore repellat neque consequuntur hic itaque totam aspernatur ducimus ea optio ipsam fugit placeat provident, soluta sit sapiente pariatur rerum. Perferendis, quod sit labore laudantium dignissimos sed? Deleniti labore nulla esse dicta quasi, ab hic magni quas obcaecati accusantium provident magnam.</p>
      </Box>
    </Layout>
  )
}

export default About
