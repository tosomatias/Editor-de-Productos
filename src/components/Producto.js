import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {borrarProductoAction,obtenerProductoEditarAction} from '../actions/productosActions';

import Swal from 'sweetalert2'

const Producto = ({producto}) => {
    const {nombre,precio,id} = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmarEliminarProducto = (id) => {

        Swal.fire({
            title: 'Estas seguro?',
            text: "No vas a poder revertir la accion!!",
            icon: 'Cuidado',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(borrarProductoAction(id));
        
            }
        })


        
    }
    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditarAction(producto) );
        history.push(`/productos/editar/${producto.id}`);

    }
    
    return (  
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
            <button 
                type="button"
                className="btn btn-primary mr-2"
                onClick={() => redireccionarEdicion(producto) }
                >Editar
            </button>
            
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
                Eliminar
                </button>
            </td>
        </tr>
    
    );
}

export default Producto;