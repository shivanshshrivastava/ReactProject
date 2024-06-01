import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../Conter/counterSlice';

const store = configureStore({
    reducer : {
        counter : counterSlice
    }
});

export default store;