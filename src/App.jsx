import Header from "./components/0ShopPage/Header/Header"
import Navigation from "./components/0ShopPage/Navigation/Navigation"
import BannerImg from "./components/0ShopPage/BannerImg/BannerImg"
import FeaturedText from "./components/0ShopPage/FeaturedText/FeaturedText"
import FeaturedImgs from "./components/0ShopPage/FeaturedImgs/FeaturedImgs"

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