import React from 'react'
import "./navbaar.css"
import SearchIcon from '@mui/icons-material/Search';

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

        </div>
      </nav>
    </header>
  )
}

export default Navbaar
