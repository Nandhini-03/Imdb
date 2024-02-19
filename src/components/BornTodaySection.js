import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function BornTodaySection() {
  
  const array=[
    {
      index:1,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:2,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:3,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:4,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:5,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:6,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:7,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:8,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:9,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },
    {
      index:10,
      image:"https://m.media-amazon.com/images/M/MV5BMjI4MzcwNzEwNF5BMl5BanBnXkFtZTgwODg1MTU5NTM@._V1_QL75_UX280_CR0,26,280,280_.jpg",
      name:"Perdita Weeks",
      age:"38"
    },

  ]

  const [hoverStates, setHoverStates] = useState(Array(array.length).fill(false));

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const getStyles=(index) =>
  {
    return hoverStates[index]?
    {
      opacity:"0.7"
    }
    :{
      opacity:"1"
    }
  }


  return (
    <div className='born-today-content'>
    {
      array.map((item,index) =>
        <NavLink to='' 
          key={index}
          className='born-today-navigation'
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          style={getStyles(index)}>
          <div className='born-today-image-navigation'>
            <div className='born-today-image-section'>
              <img className='born-today-image' src={item.image} />
            </div>
            <div className='born-today-name'>{item.name}</div>
            <div className='born-today-age'>{item.age}</div>
          </div>
      </NavLink>
      )
    }
    </div>
  )
}

export default BornTodaySection
