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
        return (
            <nav style={styles.nabvar}>
                <Logo />
                <Cart />
            </nav>
        )
    }
}

export default Nabvar