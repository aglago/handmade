import Icon from '../Icon/Icon'
import '../FeatureProductCard/FeatureProductCard.css'
import './Product.css'
import ListOfProducts from '../../ListOfProducts/ListOfProducts'

export default function ProductCard() {
    
    return ListOfProducts.map((item) => <div key={item.id} className="featureProductCard product">
        <img src={item.prodImg} alt="product image" />
        <p>{item.prodDesc}</p>
        <div className='information'>
            <div className="priceAndFavorite">
                <h3>{item.prodPrice}</h3>
                <Icon icon="favorite" className="material-symbols-outlined favorite" />
            </div>
            <Icon icon="add_shopping_cart" className="material-symbols-outlined addtocartButton" />
        </div>
    </div>)
}