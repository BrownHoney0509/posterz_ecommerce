// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import categoryReducer from './categorySlice';
// import cartReducer from './cartSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk'; // Correct import

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({ 
//   categoryReducer,
//   cartReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk],
// });

// export const persistor = persistStore(store);



// import { configureStore , combineReducers } from "@reduxjs/toolkit";
// import categoryReducer from './categorySlice'
// import cartReducer from './cartSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import {thunk} from 'redux-thunk';  // Import thunk correctly

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({ 
//     categoryReducer,
//     cartReducer
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== "production",
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
// })

// export const persistor = persistStore(store)




// import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
// import categoryReducer from './categorySlice';
// import cartReducer from './cartSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({ 
//   categoryReducer,
//   cartReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: [thunk, ...getDefaultMiddleware({ thunk: false })] // Include other middleware if needed
// });

// export const persistor = persistStore(store);



import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoryReducer from './categorySlice';
import cartReducer from
 
'./cartSlice';
import storage from
 
'redux-persist/lib/storage';
import { persistReducer, persistStore } from
 
'redux-persist';
import thunk  from 'redux-thunk'; // Updated import

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  categoryReducer,
  cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export
 
const store = configureStore({
  reducer: persistedReducer,

  
devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk] // Likely not needed with Redux Toolkit
});

export const persistor = persistStore(store);


// src/redux/store.js

// import { configureStore } from "@reduxjs/toolkit";
// import categoryReducer from './categorySlice';
// import cartReducer from './cartSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import { combineReducers } from '@reduxjs/toolkit';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   category: categoryReducer,
//   cart: cartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   devTools: process.env.NODE_ENV !== "production",
// });

// const persistor = persistStore(store);

// export { store, persistor };
