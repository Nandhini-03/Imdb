import React, { useContext } from 'react'
import TopPicks from './TopPicks'
import Header from '../Header/Header'
import Top10 from './Top10'
import FanFavorites from './FanFavorites'
import ExploreStreaming from './ExploreStreaming'
import InTheaters from './InTheaters'
import BornToday from './BornToday'
import TopNews from './TopNews'
import ExclusiveVideos from './ExclusiveVideos'
import { AuthContext } from './Context'
import RecentlyViewed from './RecentlyViewed'
import BestOfYear from './BestOfYear'

function HomePage() {
  const {open, rateDisplay, rateClose} = useContext(AuthContext)
  console.log("Context Values")
  console.log(open,rateDisplay,rateClose)
  return (
    <div>
      <Header />
      {/* <BestOfYear /> */}
      <TopPicks />
      <Top10 />
      {/* <FanFavorites /> */}
      <ExclusiveVideos />
      <ExploreStreaming />
      {/* <InTheaters /> */}
      <BornToday />
      <TopNews />
      <RecentlyViewed />
    </div>
  )
}

export default HomePage
