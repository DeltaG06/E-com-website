import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import {Divider} from "@mui/material"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    }
  };
  



const Slide = () => {
  return (
    <div 
    className='products_section'>
        <div className='products_deal'>
            <h3> Deal Of The Day</h3>
            <button className='view_btn'>View All</button>
        </div>

        <Divider /> 
    </div>
  )
}

export default Slide

