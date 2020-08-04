
import React from 'react'
import MainLayout from '../../../components/Layout/MainLayout';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
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
            </View>);
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

const styles = StyleSheet.create({
    productsList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

const mapStateToProps = (state) => {
    return {
        products: state.productFeed.products
    };
};

export default connect(mapStateToProps)(ProductFeed);