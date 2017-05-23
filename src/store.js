// import { createStore } from 'redux';
import rootReducer from './reducers/index';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const comments = {
    // 1:["hello1","sp1"],
    // 2:["hello2","sp2"]
    1: [],
    2: []
   // 必须设置初始值，不然会报错的
};

const posts = [
   {
     id: 1,
     title: 'redux-hello1',
     likes: 1
   },
   {
     id: 2,
     title: 'redux-baby2',
     likes: 2
    }
 ];

 const defaultState = {
   posts,
   comments
 };
// function commentReducer(state=[], action) {
//   switch (action.type) {
//     case 'ADD_COMMENT':
//       return [...state, action.comment]
//     default:
//       return state;
//   }
// };


// const store = createStore(rootReducer ,defaultState)
const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk)));
export default store;
