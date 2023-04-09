import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from '../services/posts';

export const store = configureStore({
    reducer:{
        [postApi.reducerPath]:postApi.reducer
    },
    middleware:(getDefaultMiddlware)=>
        getDefaultMiddlware().concat(postApi.middleware)
    
})

setupListeners(store.dispatch);