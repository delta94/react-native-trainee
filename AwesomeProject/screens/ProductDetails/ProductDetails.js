import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
import MainLayout from '../../components/Layout/MainLayout';
import { connect } from 'react-redux';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    getProductById = (id) => {
        return this.props.products.find(product => product.Id === id);
    }

    render() {
        const { itemId } = this.props.route.params;

        let { Title, Price, Description, ImageUrl } = this.getProductById(itemId);


        return (
            <>
                <MainLayout navigation={this.props.navigation} screenTitle='Product Details' isGoBackActive={true} />

                <Text>{Title}</Text>
                <Text>{Price}</Text>
                <Text>{Description}</Text>
                <Text>{ImageUrl}</Text>
                <Image
                    source={{ uri: ImageUrl }}
                />
            </>);
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productFeed.products
    };
};

export default connect(mapStateToProps)(ProductDetails);

