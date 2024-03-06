import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation"
import BannerImg from "../../components/BannerImg/BannerImg"
import FeaturedText from "../../components/FeaturedText/FeaturedText"
import FeaturedImgs from "../../components/FeaturedImgs/FeaturedImgs"
import Product from "../../components/Product/Product"
import './ShopPage.css'

export default function ShopPage() {
  
  return (
    <div>
      {/* The Shop Page of the App */}
      <Header />
      <BannerImg />
      <FeaturedText />
      <FeaturedImgs />
      <Product />
      <Navigation />
  </div>
  )
}