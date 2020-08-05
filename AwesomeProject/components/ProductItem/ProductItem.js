import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { styles } from './styles'
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

class ProductItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { product } = this.props;

        return (
            <>
                <View
                    style={styles.itemView}
                    onStartShouldSetResponder={() => this.props.navigateToProductDetails(product.Id)}
                >
                    <Image source={{ uri: product.ImageUrl }} style={styles.productImage} />
                    <View style={styles.itemFooter}>
                        <FeatherIcon
                            style={styles.heartIcon}
                            name='heart'
                            size={25}
                            onPress={() => null}
                        />
                        <Text style={styles.productTitle}>{product.Title}</Text>
                        <SimpleLineIcon
                            style={styles.shoppingBasketIcon}
                            name="basket"
                            size={25}
                            onPress={() => null}
                        />
                    </View>
                </View>
            </>
        );
    }
}

export default ProductItem;