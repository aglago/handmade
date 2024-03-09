import Icon from '../Icon/Icon'
import './FeatureProductCard.css'
import PropTypes from 'prop-types'

export default function ProductCard({src, price, description}) {
    
    return (
        <div className="featureProductCard">
            <div className="productImage">
                <img src={src} alt="product image" />
            </div>
            <div className="priceAndDescription">
                <h3>{price}</h3>
                <p>{description}</p>
            </div>
            <div className='information'>
                <div className="priceAndFavorite">
                    <Icon icon="favorite" className="material-symbols-outlined favorite" />
                </div>
                <div className='addToCart'>Add to Cart</div>
                <Icon icon="add_shopping_cart" className="material-symbols-outlined addtocartButton" />
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    src: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string
}