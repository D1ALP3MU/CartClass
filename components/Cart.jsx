import { Component } from 'react';

const styles = {
    carrito: {
        width: '40px',
        height: '40px',
        padding: '15px',
        cursor: 'pointer',
    }
}

class Cart extends Component {
    render() {
        return (
            <div>
                <img src='/public/carrito-de-compras (1).png' alt='carrito de compras' style={styles.carrito} />
            </div>
        )
    }
}

export default Cart