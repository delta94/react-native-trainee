import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    ImageBackground
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";

class ProductItem extends React.Component {
    constructor(props) {
        super(props)
    }

   

    render() {
        let { product } = this.props;
        let image = { uri: `${product.ImageUrl}` };
        return (
            <>
                <View
                    style={styles.itemView}
                    onStartShouldSetResponder={() => this.props.navigateToProductDetails(product.Id)}
                >
                    <Image source={image} style={styles.productImage} onPress={() => alert('aa')}/>
                    <View style={styles.itemFooter}>
                        <FeatherIcon
                            style={styles.heartIcon}
                            name='heart'
                            size={25}
                            onPress={() => alert('aa')}
                        />
                        <Text style={styles.title}>{product.Title}</Text>
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

const styles = StyleSheet.create({

    productImage: {
        width: 185,
        height: 140
    },
    itemView: {
        margin: 10,
        width: '45%'

    },
    itemFooter: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: 50,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        alignItems: "center"
    },
    title: {
        fontSize: 14,
        color: 'white',
        flex: 4
    },
    shoppingBasketIcon: {
        flex: 3,
        marginLeft: 20,
        color: "#ff5f38"
    },
    heartIcon: {
        flex: 3,
        marginLeft: 20,
        color: "#ff5f38"
    }
});

export default ProductItem;