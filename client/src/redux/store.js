import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import notifyReducer from './reducers/notifyReducer';
import userReducer from './reducers/userReducer';

const persistConfig = {
    key: 'rootClient',
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    notify: notifyReducer,
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
