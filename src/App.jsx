import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import BannerImg from "./components/BannerImg/BannerImg"
import FeaturedText from "./components/FeaturedText/FeaturedText"

export default function App() {
  
  return <div>
    {/* HEADER OF THE PAGE */}

    <Header />

    {/* BANNER */}

    <BannerImg />

    {/* FEATURED */}

    <FeaturedText />

    {/* FOR MOBILE */}
    {/* NAVIGATION PANEL */}

    <Navigation />
  </div>
}