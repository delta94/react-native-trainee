
import React from 'react'
import MainLayout from '../../../components/Layout/MainLayout';
import {
    View,
    Text
} from 'react-native';
import { styles } from './styles'
import { connect } from 'react-redux';
import ProductItem from '../../../components/ProductItem/ProductItem'

class ProductFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    navigateToProductDetails = (itemId) => {
        this.props.navigation.navigate('ProductDetails', { itemId: itemId });
    }

    renderProductsList = () => {
        let { products } = this.props;
        if (!products) {
            return (<Text>Products is empty.</Text>);
        }

        return (
            <View style={styles.productsList}>
                {products.map((product) => {
                    return <ProductItem
                        key={product.Id}
                        product={product}
                        navigateToProductDetails={this.navigateToProductDetails}
                    />
                })}
            </View>
        );
    }

    render() {

        let productsList = this.renderProductsList();

        return (
            <>
                <MainLayout
                    navigation={this.props.navigation}
                    screenTitle='My Shop'
                    showShoppingBasket={true}
                    showThreeDotsMenu={true}
                />

                {productsList}

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productFeed.products
    };
};

export default connect(mapStateToProps)(ProductFeed);