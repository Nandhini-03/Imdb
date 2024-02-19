import React from 'react'

function Search() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleHover = () => {
  //   setIsHovered(true);
  // };

    const styles={
        backgroundColor:"white",
        paddingLeft:"10px",
        display:"flex",
        height:"32px"
        // marginTop:"5px"
    }
    const style1={
        borderRadius:"10% 0 0 10%",
        paddingTop:"2px"
    }
    const style2={
        borderRadius:"0 10% 10% 0"
    }
  return (
    <div style={{display:"flex"}}>
      <div style={{...styles,...style1,height:"32px"}}>
        <span style={{paddingTop:"5px"}}>All</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--arrow-drop-down ipc-btn__icon ipc-btn__icon--post navbar__flyout__text-button-post-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation">
          <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
        </svg>
      </div>

      <div style={{...styles,...style2}}>
          <input style={{width:"600px",border:"none"}} placeholder='Search IMDb'></input>
          <button style={{border:"none",backgroundColor:"white",color:" rgba(0,0,0,0.54)"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="ipc-icon ipc-icon--magnify" viewBox="0 0 24 24" fill="currentColor" role="presentation">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
          </button>
      </div>
    </div>
    
  )
}

export default Search
