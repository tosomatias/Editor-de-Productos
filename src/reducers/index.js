import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReeducer';

export default combineReducers({
    productos:productosReducer,
    alerta:alertaReducer
});