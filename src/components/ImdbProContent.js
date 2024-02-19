import React,{useState} from 'react'

function ImdbProContent() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='ImdbPro-hover'>
      <div className='ImdbPro-hover-text' >Try IMDbPro for FREE</div>
    </div>
    // <div className={`imdb-pro-content-container ${isHovered ? 'show' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
    // <div className="imdb-pro-content-text">Try IMDbPro for FREE</div>
  // </div>
  )
}

export default ImdbProContent
