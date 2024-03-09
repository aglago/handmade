import Icon from '../Icon/Icon'
import '../FeatureProductCard/FeatureProductCard.css'
import './Product.css'
import ListOfProducts from '../../assets/ListOfProducts/ListOfProducts'

export default function ProductCard() {
    
    return (

        <div className="products_container">
            {
                ListOfProducts.map((item, index) => {
                    return (
                        <div className="featureProductCard product" key={index}>
                            <div className="productImage">
                                <img src={item.prodImg} alt="product image" />
                            </div>
                            <div className="priceAndDescription">
                                <h3>{item.prodPrice}</h3>
                                <p>{item.prodDesc}</p>
                            </div>
                            <div className='information'>
                                <div className="priceAndFavorite">
                                    <Icon icon="favorite" className="material-symbols-outlined favorite" />
                                </div>
                                <div className="addtocartWrapper">
                                    <Icon icon="add_shopping_cart" className="material-symbols-outlined addtocartButton for-mobile" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}