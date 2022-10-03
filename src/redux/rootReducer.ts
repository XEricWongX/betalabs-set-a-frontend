import { combineReducers } from 'redux';
/* import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; */

// slices
/* import mailReducer from './slices/mail'; */
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
 /*  storage, */
  keyPrefix: 'redux-',
  whitelist: [],
};

const productPersistConfig = {
  key: 'product',
 /*  storage, */
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = combineReducers({
});

export { rootPersistConfig, rootReducer };
