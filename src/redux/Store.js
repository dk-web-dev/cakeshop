import { createStore } from "redux";
import Rootreducer from './allreducer';

const Store = createStore(Rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;