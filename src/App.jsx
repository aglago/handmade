import Header from "./components/0ShopPage/Header/Header"
import Navigation from "./components/0ShopPage/Navigation/Navigation"
import BannerImg from "./components/0ShopPage/BannerImg/BannerImg"
import FeaturedText from "./components/0ShopPage/FeaturedText/FeaturedText"
import FeaturedImgs from "./components/0ShopPage/FeaturedImgs/FeaturedImgs"

export default function App() {
  
  return <div>
    {/* The Shop Page of the App */}

    <Header />
    <BannerImg />
    <FeaturedText />
    <FeaturedImgs />
    <Navigation />
  </div>
}