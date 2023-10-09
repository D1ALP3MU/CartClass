import { Component } from 'react';
import BubleAlert from './BubleAlert';
import DetailsCart from './DetailsCart';

const styles = {
    carrito: {
        width: '40px',
        height: '40px',
        padding: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'absolute',
        left: '12',
        top: '20',
    }
}

class Cart extends Component {
    render() {
        const { carrito, esCarritoVisible, mostrarCarro, disminuirCarrito, aumentarCarrito, eliminarCarrito } = this.props
        const cantidad = carrito.reduce( (acum, item) => acum + item.cantidad, 0 )
        console.log(carrito);
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                        ? <BubleAlert value={cantidad} />
                        : null
                    }
                </span>
                <img 
                    src='/public/carrito-de-compras (1).png' 
                    alt='carrito de compras' 
                    style={styles.carrito} 
                    onClick={mostrarCarro}
                />
                {esCarritoVisible
                    ? <DetailsCart 
                        carrito={carrito} 
                        disminuirCarrito={disminuirCarrito} 
                        aumentarCarrito={aumentarCarrito} 
                        eliminarCarrito={eliminarCarrito} />
                    : null
                }
            </div>
        )
    }
}

export default Cart