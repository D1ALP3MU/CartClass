import { Component } from 'react';
import Logo from './Logo';
import Cart from './Cart';

const styles = {
    nabvar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 3rem',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
    }
}

class Nabvar extends Component {
    render() {
        const { carrito, esCarritoVisible, mostrarCarro, disminuirCarrito, aumentarCarrito, eliminarCarrito } = this.props
        return (
            <nav style={styles.nabvar}>
                <Logo />
                <Cart 
                    carrito={carrito}
                    esCarritoVisible={esCarritoVisible}
                    mostrarCarro={mostrarCarro}
                    disminuirCarrito={disminuirCarrito}
                    aumentarCarrito={aumentarCarrito}
                    eliminarCarrito={eliminarCarrito}
                />
            </nav>
        )
    }
}

export default Nabvar