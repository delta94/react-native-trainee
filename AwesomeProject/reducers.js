
import { combineReducers } from 'redux';

import { reducer as productFeed } from './screens/Product/reducer';

const rootReducer = combineReducers({
    productFeed: productFeed,
});

export default rootReducer;