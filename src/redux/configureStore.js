import {createStore,applyMiddleware,combineReducers} from "redux";
import {createLogger} from "redux-logger";
const loggerMiddleware=creatLogger();
const createStoreWithMiddleware=applyMiddleware(loggerMiddleware)(createStore);
import toDoApp from './modules/todoApp';
const reducer=combineReducers({
    toDoApp
})
const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
