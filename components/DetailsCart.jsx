import { Component } from 'react';

const styles = {
    detailsCart: {
        backgroundColor: '#aaa',
        position: 'absolute',
        marginTop: '30',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: '50px',
    },
    ul: {
        margin: '0',
        padding: '0',
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: '1px solid #fff',
    },
    image: {
        boxShadow: '1px 5px 5px rgb(0,0,0,0.4)',
        width: '50px',
        height: '32px',
    },
    containerButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '5px',
    },
    button: {
        backgroundColor: '#003554',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    buttonDelete: {
        backgroundColor: '#aa0c0c',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontWeight: 'bold',
    }

}

class DetailsCart extends Component {
    render() {
        const { carrito, disminuirCarrito, aumentarCarrito, eliminarCarrito } = this.props
        console.log(carrito);
        return (
            <div style={styles.detailsCart}>
                <ul style={styles.ul}>
                    {carrito.map( product => 
                        <li key={product.name} style={styles.producto}>
                            <img 
                                src={product.img} 
                                alt={product.name} 
                                style={styles.image}
                            />
                            {product.name}
                            <span>{product.cantidad}</span>
                            <div style={styles.containerButtons}>
                                <button style={styles.button} onClick={ ()=>disminuirCarrito(product) }>-</button>
                                <button style={styles.button} onClick={ ()=>aumentarCarrito(product) }>+</button>
                                <button style={styles.buttonDelete} onClick={ ()=>eliminarCarrito(product)}>x</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default DetailsCart