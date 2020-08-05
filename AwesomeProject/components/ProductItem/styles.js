
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

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
    productTitle: {
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