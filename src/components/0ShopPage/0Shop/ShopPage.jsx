import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import BannerImg from "../BannerImg/BannerImg"
import FeaturedText from "../FeaturedText/FeaturedText"
import FeaturedImgs from "../FeaturedImgs/FeaturedImgs"
import Product from "../Product/Product"
import './ShopPage.css'

export default function ShopPage() {
  
  return <div>
    {/* The Shop Page of the App */}

    <Header />
    <BannerImg />
    <FeaturedText />
    <FeaturedImgs />
    <Product />
    <Navigation />
  </div>
}