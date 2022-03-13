import React, { useState } from "react";
import "./Header.scss";
import { HeaderNavs } from "../../Service/commondata";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import $ from 'jquery';
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ setShowCart }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="topbar">
      <div className="freeshipping">Free shipping on all orders above £39</div>
      <div className="Header  ">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <div className="headerTitle">
          <Link className="link" to="/">Tyche Silk</Link>
        </div>
        <div className="navbar">
          {
            HeaderNavs.map((headernav, ind) => <Link className="link navItem" to={headernav.to} key={ind}>
              <span className="px-2 m-1" key={ind}> {headernav.title} </span>
            </Link>)
          }
        </div>
        <div className="cartBlock">
          <div className="mx-2">
            <input className="headerSearch" type="text" placeholder="search" />
          </div>
          <div className="pointer mx-2">

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu" 
            >
              <PersonOutlineIcon />
            </IconButton>
          </div>
          <div className="pointer mx-2" onClick={() => setShowCart(true)}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu" 
            >
              <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondaryHeader = () => {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200 && window.innerWidth > 768) {
      $('#secondaryHeader').addClass('showHeader');
    } else {
      $('#secondaryHeader').removeClass('showHeader');
    }
  });

  return <div id="secondaryHeader" className="secondaryHeader bg-dark text-light ">
    <div className="d-flex justify-content-center m-auto p-4 navbar">
      {
        HeaderNavs.map((headernav, ind) => <Link className="link" to={headernav.to} key={ind}>
          <span className="px-2 m-1" key={ind}> {headernav.title} </span>
        </Link>)
      }
    </div>
  </div>
}

export { Header, SecondaryHeader };
