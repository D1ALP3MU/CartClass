import { Component } from 'react';

const styles = {
    product: {
        border: '1px solid ##eee',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}

class Product extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;

        return (
            <div style={styles.product}>
                <img alt={producto.name} src={producto.img} style={styles.img}/>
                <h2>{producto.name}</h2>
                <h4>{producto.price}</h4>
                <button>Add cart</button>
            </div>
        )
    }
}

export default Product