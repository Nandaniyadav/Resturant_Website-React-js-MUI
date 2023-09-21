import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 10, ml: 10,
        "& h4": { fontWeight: 'bold', mb: 2 }
      }}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere labore repudiandae eveniet, quae qui omnis aliquid modi nam repellendus consequuntur rerum eos placeat corporis tempora! Vero ipsa dolores cumque blanditiis.</p>
      </Box>
      <Box sx={{m:3, width:'600px', ml:5, "@media (max-width:600px)":{
        width:'300px'
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white' }} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800-000-00  (Toll Free)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: 'skyblue', pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <AddIcCallIcon sx={{ color: 'green', pt: 1 }} /> 1020304050
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact




