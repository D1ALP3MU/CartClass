import { Component } from 'react';

const styles = {
    logo: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        cursor: 'pointer',
    }
}

class Logo extends Component {
    render() {
        return (
            <div>
                <img src="/public/logo.jpg" alt="Logo" style={styles.logo}/>
            </div>
        )
    }
}

export default Logo