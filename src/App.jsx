import { Component } from 'react';
import Productos from '../components/Productos';

class App extends Component {
  state = {
    productos: [
      { name: 'Laptop', price: 2500, img: '/laptop.png' },
      { name: 'Phone', price: 1500, img: '/phone.png' },
      { name: 'Speaker', price: 800, img: '/speaker.png' },
    ]
  }

  render() {
    return (
      <div>
        <Productos
          productos={ this.state.productos }
          agregarAlCarro={ ()=> console.log('Agregar al carrito') } 
        />
      </div>
    )
  }
}

export default App
