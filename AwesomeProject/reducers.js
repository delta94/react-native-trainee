
import { combineReducers } from 'redux';

import { reducer as productFeed } from './screens/ProductFeed/reducer';

const rootReducer = combineReducers({
    productFeed: productFeed,
});

export default rootReducer;