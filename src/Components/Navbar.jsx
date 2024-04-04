import React, { useState, useRef } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EverydayLogo from '../Assets/everyday logo.png';
import './Nav.css'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      refId: "home-section" // Add ID of the Home section
    },
    {
      text: "Drink Menu",
      icon: <HiOutlineMenuAlt3 />,
      refId: "drink-menu-section" // Add ID of the Drink Menu section
    },
    {
      text: "Food Menu",
      icon: <HiOutlineMenuAlt3 />,
      refId: "food-menu-section" // Add ID of the Food Menu section
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      refId: "contact-section" // Add ID of the Contact section
    },
  ];

  // Refs for scrolling to sections
  const homeRef = useRef();
  const drinkMenuRef = useRef();
  const foodMenuRef = useRef();
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setOpenMenu(false); // Close the menu after scrolling
  };

  const getRefById = (id) => {
    switch (id) {
      case "home-section":
        return homeRef;
      case "drink-menu-section":
        return drinkMenuRef;
      case "food-menu-section":
        return foodMenuRef;
      case "contact-section":
        return contactRef;
      default:
        return null;
    }
  };

  return (
    <nav> 
      <div className="nav-logo-container">
        {/* Add your navbar image */}
        <img src={EverydayLogo} alt="Navbar Logo" style={{ width: 'auto', height: '60px' }} />
      </div>
      <div className="navbar-links-container">
        {/* Scroll to sections when navbar items are clicked */}
        {menuOptions.map((item, index) => (
          <a key={index} href="#" onClick={() => scrollToSection(getRefById(item.refId))}>
            {item.text}
          </a>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => scrollToSection(getRefById(item.refId))}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
