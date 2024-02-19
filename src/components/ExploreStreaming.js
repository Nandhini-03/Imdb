import React, { useEffect, useState } from 'react'
import WatchCard from './WatchCard'
import StreamingNavlink from './StreamingNavlink'
import axios from 'axios';

function ExploreStreaming() {
    const [activeNavLink, setActiveNavLink] = useState('PRIME VIDEO');
    const [arrayPrime,setArrayPrime] = useState([])
    const [arrayHotstar,setArrayHotstar] = useState([])
    const [arrayNetflix,setArrayNetflix] = useState([])
    const [arrayData, setArrayData] = useState(arrayPrime);

    // const array1=[
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     }
    // ]

    // const array2=[
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     },
    //     {
    //         image:"https://m.media-amazon.com/images/M/MV5BMzE3MTY5MjktOTZjNC00ZjhhLTgyZjktYjUxMjE5YzQ5OTJkXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg"
    //     }
    // ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("request explore streaming")
                const response = await axios.get('https://imdb-backend-r3r6.onrender.com/ott/streams')
                    // console.log(response.data[0]),
                    // console.log("explore prime request"),
                    setArrayPrime(response.data.prime)
                    setArrayHotstar(response.data.hotstar)
                    
            }
            catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData()
    }, []);

    console.log(arrayPrime)

    useEffect(() =>
    {
        setArrayData(arrayPrime)
    },[arrayPrime]);

    // {
    //     if(updateArrayData)
    //     {
    //     switch(activeNavLink)
    //     {

    //         case 'PRIME VIDEO':
    //             console.log("empty")
    //             console.log(arrayPrime)
    //             setArrayData(arrayPrime)
    //             console.log("prime")
    //             console.log(arrayData)
    //             break;

    //         case 'NETFLIX':
    //             setArrayData(arrayNetflix)
    //             break;

    //         case 'HOTSTAR':
    //             setArrayData(arrayHotstar)
    //             break;    
    //     }
    // }
    // },[activeNavLink,arrayPrime,arrayHotstar])


    // const handleNavLinkClick = (name) => {
    //     setActiveNavLink(name);
    //     setUpdateArrayData(true);
    // };
  return (
    <div>
      <h2 className='headings-type2'>Explore what's streaming</h2>
      <div style={{margin:"0 0 15px 20px"}}>
        <div style={{display:"flex"}}>
            <StreamingNavlink to='' name='PRIME VIDEO'
                isActive={activeNavLink === 'PRIME VIDEO'}
                onClick={()=>setArrayData(arrayPrime)}/>
            <StreamingNavlink to='' name='NETFLIX' 
                isActive={activeNavLink === 'NETFLIX'}
                onClick={()=>setArrayData(arrayPrime)}/>
            <StreamingNavlink to='' name='HOTSTAR' 
                isActive={activeNavLink === 'HOTSTAR'}
                onClick={()=> setArrayData(arrayHotstar)}/>
            <StreamingNavlink to='' name='MXPLAYER' 
                isActive={activeNavLink === 'MXPLAYER'}
                onClick={() => handleNavLinkClick('MXPLAYER')}/>
            <StreamingNavlink to='' name='JIOCINEMA' 
                isActive={activeNavLink === 'JIOCINEMA'}
                onClick={() => handleNavLinkClick('JIOCINEMA')}/>
            <StreamingNavlink to='' name='SONYLIV' 
                isActive={activeNavLink === 'SONYLIV'}
                onClick={() => handleNavLinkClick('SONYLIV')}/>
            <StreamingNavlink to='' name='EROSNOW' 
                isActive={activeNavLink === 'EROSNOW'}
                onClick={() => handleNavLinkClick('EROSNOW')}/>
            <StreamingNavlink to='' name='VOOT' 
                isActive={activeNavLink === 'VOOT'}
                onClick={() => handleNavLinkClick('VOOT')}/>
        </div>
      </div>
      {
        arrayData && <WatchCard array={arrayData}/>
      }
    </div>
  )
}

export default ExploreStreaming
