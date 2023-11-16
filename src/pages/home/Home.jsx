import "./style.scss"
import HeroBanner from "./herobanner/HeroBanner"
import Trending from "./trending/trending"
import Popular from "./popular/Popular"
import TopRated from "./toprated/Toprated"


const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />      
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home

