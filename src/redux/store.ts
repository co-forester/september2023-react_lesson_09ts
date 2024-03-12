import {configureStore} from "@reduxjs/toolkit";

let store = configureStore({
    reducer:{
        loadingReducer
    }
});

export {store}