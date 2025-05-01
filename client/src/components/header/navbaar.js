import React from 'react'
import "./navbaar.css"
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbaar = () => {
  return (
    <header>
      <nav>
        <div className = "left">
          <div className="navlogo">
          <img src="/amazon_PNG25.png" alt="Amazon logo"/>
          </div>
        <div className="nav_searchbaar">
          <input type="text" name="" id=""/>
          <div className="search_icon">
              <SearchIcon id = "search" />
          </div>
        </div>
         
        </div>
        <div className="right">
            <div className="nav_btn">
                <a href=" ">SignIn</a>
            </div>
        <div className="cart_btn">
          <badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon"/>
          </badge>
          <p>Cart</p>

        </div>
        <Avatar className='avatar'/>
        </div>
      </nav>
    </header>
  )
}

export default Navbaar
