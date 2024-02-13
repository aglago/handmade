import Icon from '../Icon/Icon'
import './ProductCard.css'
import PropTypes from 'prop-types'

export default function ProductCard({src, price, description}) {
    
    return <div className="featureProductCard">
        <img src={src} alt="product image" />
        <p>{description}</p>
        <div className='information'>
            <div className="priceAndFavorite">
                <h3>{price}</h3>
                <Icon icon="favorite" className="material-symbols-outlined favorite" />
            </div>
            <div className='addToCart'>Add to Cart</div>
            <Icon icon="add_shopping_cart" className="material-symbols-outlined addtocartButton" />
        </div>
    </div>
}

ProductCard.propTypes = {
    src: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string
}