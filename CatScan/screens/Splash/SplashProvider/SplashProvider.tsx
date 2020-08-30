import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appLoaded } from '../actions'
import { AppState } from '../../../reducers';
import Splash from '../SplashScreen/Splash';

interface StateFromProps {
    loading: boolean;
}
interface DispatchFromProps {
    appLoaded: () => void;
}

class SplashProvider extends Component<StateFromProps & DispatchFromProps> {

    componentDidMount() {
        setTimeout(() => { this.props.appLoaded(); }, 1000);
    }

    render() {
        const isLoading = this.props.loading

        return isLoading ? <Splash /> : this.props.children;
    }
}

const mapStateToProps = (state: AppState): StateFromProps => ({
    loading: state.splash.loading
});

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {
    appLoaded
})(SplashProvider);

