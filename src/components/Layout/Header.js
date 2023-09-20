import React { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyle.css";


const Header = () => {
  const [mobileOpen, setmobileOpen] = useState(false)

  

  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              area-aria-label="open drwaer"
              edge="start"
              sx={{ 
                mr: 2,
              display:{ sm : "none"},}}
            >
              <MenuBookIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Box>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>{" "}
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>{" "}
                </li>
                <li>
                  <Link to={"/about"}>About</Link>{" "}
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
