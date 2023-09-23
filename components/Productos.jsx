import { Component } from 'react';
import Product from './Product';

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props;
        return (
        <div>
            { productos.map( producto => 
                <Product 
                    key = { producto.name }
                    producto = { producto }
                    agregarAlCarro = { agregarAlCarro }
                />
                )}
        </div>
        )
    }
}

export default Productos