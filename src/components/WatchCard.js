import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from './Rating';



function WatchCard({array}) {
  
  const [isHovered,setisHovered] = useState(false)
  const [isHovered2,setisHovered2] = useState(false)
  const [isHovered3,setisHovered3] = useState(false)
  const [isHovericon,setisHovericon] = useState(false)
  const [rateDisplay,setRateDisplay] = useState(false)
  const [movieName,setMovieName] = useState('')
  const [showModal,setShowmodal] = useState(false)

  //Sliding

const [currentSlide, setCurrentSlide] = useState(0);
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

const getStylesLeft=() =>
{
    return {
        fill:hover1? "yellow" : "white"
    }
}

const getStylesRight=() =>
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
            <svg width="24" height="24" style={getStylesLeft()} xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-right-inline ipc-icon--inline ipc-pager-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
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
          <svg width="24" height="24" style={getStylesRight()} xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--chevron-left-inline ipc-icon--inline ipc-pager-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
              <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
          </svg>
              {/* <IoIosArrowBack /> */}
          </div>
      </div>
  );
}


const settings = {
  dots: true,
  infinite: false,
  speed: 600,
  slidesToShow: 6,
  slidesToScroll: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  afterChange: (current) => setCurrentSlide(current),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};
  
  const handleMouseEnterWatchlist =() =>
  {
    setisHovericon(true)
  }

  const handleMouseLeaveWatchlist=() =>
  {
    setisHovericon(false)
  }

  const getStyles4=() =>
  {
    return{
      opcity:isHovericon?"0.5" : "0.2"
    }
  }

  const handleRateClick=(name) =>
  {
    setMovieName(name);
    setShowmodal(true)
  }

  const handleRateClose =() =>
  {
    setShowmodal(false)
  }

  return (
    
    <div className='explore-streaming-section' style={{display:"flex"}}>
        <div className='slick-styles' style={{width:"96%"}}>
            <Slider {...settings}>
            { array.map(item =>

              <div key={item.index} style={{ marginRight: "20px", display: "inline-block",transition: 'opacity 0.5s ease' }}>

                <NavLink className='card-image-section'>

                  <div className='add-watchlist-icon'
                    onMouseEnter={handleMouseEnterWatchlist}
                    onMouseLeave={handleMouseLeaveWatchlist}
                    style={getStyles4()}>
                      <svg className="ipc-watchlist" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                        <polygon className="watchlist-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                        <polygon className="watchlist-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon>
                        <polygon className="watchlist-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon>
                      </svg>
                      <div className='watchlist-plus-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="plus-icon" viewBox="0 0 24 24" fill="white" role="presentation">
                          <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                        </svg>
                      </div>
                  </div>

                  <div style={{width:"185px",height:"274px"}}>
                    <img className='card-image' src={Array.isArray(item.images) ? item.images[0] : item.image_url }/>
                  </div>
                </NavLink>

                <div className='card-details'>

                  <div className='card-movie-rating'>
                    <span style={{ marginRight: "5px" }}>
                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="icon-star" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                      </svg>{item.rating}
                    </span>
                    <button className='card-movie-rating-button' 
                    onClick={() => handleRateClick(item.title)}>
                      {/* style={getStyles3()}
                      onMouseEnter={handleMouseEnter(setisHovered3)}
                      onMouseLeave={handleMouseLeave(setisHovered3)} */}
                      
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="user-rating-star-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path></svg>
                    </button>
                  </div>

                  <NavLink to='/' style={{textDecoration:"none"}}>
                    <div className='movie-details'>{item.title}</div>
                  </NavLink>

                  <div style={{ padding: "0 10px", marginTop: "10px" }}>
                    <button className='watch-now-button'>
                      <div>Watch now</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path d="M16 16.667H8A.669.669 0 0 1 7.333 16V8c0-.367.3-.667.667-.667h3.333c.367 0 .667-.3.667-.666C12 6.3 11.7 6 11.333 6h-4C6.593 6 6 6.6 6 7.333v9.334C6 17.4 6.6 18 7.333 18h9.334C17.4 18 18 17.4 18 16.667v-4c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667V16c0 .367-.3.667-.667.667zm-2.667-10c0 .366.3.666.667.666h1.727L9.64 13.42a.664.664 0 1 0 .94.94l6.087-6.087V10c0 .367.3.667.666.667.367 0 .667-.3.667-.667V6h-4c-.367 0-.667.3-.667.667z"></path>
                      </svg>
                    </button>
                  </div>

                  <div className='trailer-button-section'>
                    <NavLink className='trailer-button'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ marginBottom: "3px" }} viewBox="0 0 24 24" fill="currentColor" role="presentation">
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path>
                      </svg>
                      <div style={{ marginTop: "4px" }}>Trailer</div>
                    </NavLink>
                  </div>

                </div>
              </div >

            )}
            </Slider>
        </div>

        { showModal && <Rating movieName={movieName} userId='sanjay1003' bol={showModal} onClose={handleRateClose}/>}
    </div>

  )
}

export default WatchCard
