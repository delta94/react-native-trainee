import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';
class ProductItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { product } = this.props;
        
        return (
            <>
                <Text>{product.Title}</Text>
                <Image
                    source={{ uri: `${product.ImageUrl}` }}
                />
            </>);
    }
}

export default ProductItem;