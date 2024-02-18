import Icon from "../../0ShopPage/Icon/Icon";
import Navigation from "../../0ShopPage/Navigation/Navigation";
import Search from "../../0ShopPage/Search/Search";
import allProducts from "../ListOfProducts/ListOfProducts";
import './SearchPage.css'


export default function SearchPage() {
    
    return <div className="searchPageBody">
        <div className="searchContainer">
            <Search
            className="material-symbols-outlined searchInSearch"
            divClassName="searchDivSearch"
            />

            <Icon
                className="material-symbols-outlined cartButtonInSearch"
                icon="shopping_cart"
            />
        </div>

        <div className="leftAndRight">
            <div className="left">
                {allProducts.map((item) => 
                    item.categories.map((category) =>
                        <div key={category.id} className="left_card">
                            {category.name}
                        </div>
                    )
                )}
            </div>
            <div
                className="right">
                <div
                    className="all_products">
                    <p>All Products</p>
                    <Icon
                        className="material-symbols-outlined rightIcon"
                        icon="chevron_right"
                    />
                </div>

                <div className="productInCategoryContainerWrapper">
                    {allProducts.map(item => {
                        return item.categories.map(category => {
                            return category.categories.map((seller) => {
                                return <div key={category.id}
                                    className="food productInCategoryContainer">
                                        <div className="title">
                                            {seller.seller}
                                        </div>
                                    <div className="products">
                                        {
                                            seller.products.map((product) => {
                                                return <div
                                                    key={product.id}
                                                    className="product">
                                            <img src={product.image} alt="picture of product" />
                                        </div>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                            
                            
                        }
                        )
                    })}
                </div>
            </div>
        </div>

        <Navigation />
    </div>
}