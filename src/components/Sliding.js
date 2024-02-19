import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Sliding = () => {

const [hover1,setHover1] = useState(false)
const [hover2,setHover2] = useState(false)

const handleMouseEnterLeft=() =>
{
    setHover1(true)
}

const handleMouseLeaveLeft=() =>
{
    setHover1(false)
}

const handleMouseEnterRight=() =>
{
    setHover2(true)
}

const handleMouseLeaveRight=() =>
{
    setHover2(false)
}

const getStyles=() =>
{
    return {
        fill:hover1? "yellow" : "white"
    }
}

const getStyles1=() =>
{
    return {
        fill:hover2? "yellow" : "white"
    }
}

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div
        className="arr-left"
        onClick={onClick}
        onMouseEnter={handleMouseEnterLeft} 
        onMouseLeave={handleMouseLeaveLeft}>
            <div className='icon-box'>
            <svg width="24" height="24" style={getStyles()} xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
            </svg>
                {/* <IoIosArrowForward style={getStyles()}/> */}
            </div>
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arr-right"
         onClick={onClick}
         onMouseEnter={handleMouseEnterRight} 
         onMouseLeave={handleMouseLeaveRight}>
            <div className='icon-box' onMous>
            <svg width="24" height="24" style={getStyles1()} xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-left-inline ipc-icon--inline ipc-pager-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
            </svg>
                {/* <IoIosArrowBack /> */}
            </div>
        </div>
    );
  }


// const Sliding = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const settings = {
      dots: true,
      infinite: false,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      afterChange: (current) => setCurrentSlide(current),
    };
  
    const array=[
        {
            image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        },
        {
            image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
        }
    ]

    return (
      <div className='slick-styles' style={{width:"96%",marginLeft:"25px"}}>
        <Slider {...settings}>
            {
                array.map(item =>
                    <div>
                        <img src={item.image} />
                    </div>)
            }
          
        </Slider>
        <p style={{color:"white"}}>Current Slide: {currentSlide + 1}</p>
      </div>
    );
  };

export default Sliding
