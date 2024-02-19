import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: '#1f1f1f',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};





function Rating({movieName,userId,bol,onClose}) {

  // console.log(`Movie name: ${movieName}`)
  // console.log(`userId : ${userId}`)
  const ratings = {
    size: 20,
    count: 10,
    color: "black",
    activeColor: "#5799ef",
    value: 0,
    a11y: false,
    isHalf: false,
    emptyIcon:<FontAwesomeIcon icon={ regularStar } style={{color:'hsla(0,0%,100%,.5)',margin:"4px"}}  />,
    filledIcon: <FontAwesomeIcon icon={ solidStar } style={{margin:"4px"}}/>,
    onChange: newValue => { setRating(newValue) }
  };

  const [open, setOpen] = useState(bol);
  const handleOpen = () => setOpen(true);
  const handleClose = () => 
  {
    setOpen(false);
    onClose();
  }
  const [rating,setRating] = useState(0)
  const [submitted,setSubmitted] = useState(false)

  // console.log("Rating")
  // console.log(rating)


// console.log(movieName,userId)

const handleSubmit = () =>
{
  const fetchData=async() =>
  {
    try{
     
      const response= await axios.post('https://imdb-backend-r3r6.onrender.com/user/rating',
      {
        "movieName":movieName,
        "userId":userId,
        "rating":rating
      }) 
      console.log(rating,movieName,userId)
    }
    catch(error)
    {
      console.log(error)
    }
  }

  fetchData()
  setSubmitted(true)
}

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <div className='rating-rate-this'>RATE THIS</div>
            <div className='rating-movie-name'>Salaar</div>
            <ReactStars {...ratings} style={{margin:"10px"}}/>
            <button className='rate-submit-button-section' onClick={handleSubmit}>
              <div className='rate-submit-button'>RATE</div>
            </button>

            <Button onClick={handleClose}>close</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export default Rating
