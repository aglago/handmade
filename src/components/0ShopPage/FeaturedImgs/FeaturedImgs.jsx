import ProductCard from "../FeatureProductCard/FeatureProductCard"
import './FeaturedImgs.css'

export default function FeaturedImgs() {

    return <div className="featuredImgs">
        <ProductCard src="https://d17a17kld06uk8.cloudfront.net/products/M5M6VCV/5KNWMNXT-large.jpg" price="GHc 60" description="Slippers" />
        <ProductCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqzWGxPbwGcvMCSPAO4EcvKOU-9GrzJAyq3X46JoqcyyV028UXFeQFkhzwQcMRD_ahcg&usqp=CAU" price="GHc 229" description="Baby crochet dress"/>
    </div>
}