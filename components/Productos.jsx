import { Component } from 'react';
import Product from './Product';

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props;
        return (
        <div style={styles.productos}>
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