import { APP_LOADED } from './actions';

export type SplashState = {
    loading: boolean;
}

const initialState: SplashState = {
    loading: true
}

export const reducer = (state: SplashState = initialState, action: any) => {
    switch (action.type) {
        case APP_LOADED.APP_LOADED:
            return { ...state, loading: false };

        default:
            return state;
    }
}