export enum APP_LOADED {
    APP_LOADED = 'APP_LOADED'
}

export const appLoaded = () => {
    return (dispatch: any) => {
        dispatch({ type: APP_LOADED.APP_LOADED });
    }
};


