import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import BannerImg from "./components/BannerImg/BannerImg"
import FeaturedText from "./components/FeaturedText/FeaturedText"
import FeaturedImgs from "./components/FeaturedImgs/FeaturedImgs"

export default function App() {
  
  return <div>
    {/* HEADER OF THE PAGE */}

    <Header />

    {/* BANNER */}

    <BannerImg />

    {/* FEATURED */}

    <FeaturedText />

    {/* Fearuted Products */}

    <FeaturedImgs />

    {/* Products */}

    {/* FOR MOBILE */}
    {/* NAVIGATION PANEL */}

    <Navigation />
  </div>
}