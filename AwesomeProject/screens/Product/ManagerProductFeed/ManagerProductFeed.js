
import React from 'react'
import MainLayout from '../../../components/Layout/MainLayout';

class ManagerProductFeed extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <>
                <MainLayout navigation={this.props.navigation} screenTitle='Your Products'/>
            </>
        );
    }
}

export default ManagerProductFeed;