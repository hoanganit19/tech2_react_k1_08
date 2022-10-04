//import rootReducer from './reducers/rootReducer';
// import {createStore} from 'redux';

// const store = createStore(rootReducer); //Tạo store

import {configureStore} from '@reduxjs/toolkit';
import toDoSlice from '../components/ToDo/toDoSlice'; //Reducer (con) tương ứng với tính năng

const rootReducer = {
    reducer: {
        todo: toDoSlice
    }
}

const store = configureStore(rootReducer);

export default store;