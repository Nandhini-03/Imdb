import React, { useState } from 'react';
import ImdbPro from './ImdbPro';
import ImdbProContent from '../components/ImdbProContent';
import Search from './Search';

const HoverComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <ImdbPro
        onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />

      {isHovered && (
        <div>
          <ImdbProContent className='hovered-container' onMouseEnter={handleHover}/>
          {/* <p style={{color:"white"}}>This is displayed when the button is hovered!</p> */}
        </div>
      )}
    </div>
  );
};

export default HoverComponent;
