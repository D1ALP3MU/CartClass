import { Component } from 'react';
import Productos from '../components/Productos';
import Title from '../components/Title';
import Layout from '../components/Layout';
import Nabvar from '../components/Nabvar';

class App extends Component {
  state = {
    productos: [
      { name: 'Laptop', price: 2500, img: '/laptop.png' },
      { name: 'Phone', price: 1500, img: '/phone.png' },
      { name: 'Speaker', price: 800, img: '/speaker.png' },
    ],
    carrito: [],
    esCarritoVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carrito } = this.state
    if (carrito.find(pdt => pdt.name === producto.name)) {
      const newCarrito = carrito.map(prod => prod.name === producto.name
        ? ({
          ...prod,
          cantidad: prod.cantidad + 1
        })
        : prod
      )
      return this.setState({ carrito:newCarrito })
    }

    return this.setState({ 
      carrito: this.state.carrito.concat({
        ...producto,
        cantidad: 1,
      })})
  }

  mostrarCarro = () => {
    if ( !this.state.carrito.length ) {
      return
    }
    this.setState({ esCarritoVisible: !this.state.esCarritoVisible })
  }

  disminuirCarrito = (producto) => {
    const { carrito } = this.state
    if (carrito.find(pdt => pdt.name === producto.name && pdt.cantidad > 1)) {
      const newCarrito = carrito.map(prod => prod.name === producto.name
        ? ({
          ...prod,
          cantidad: prod.cantidad - 1
        })
        : prod
      )
      return this.setState({ carrito:newCarrito })
    }
    const newCarrito = carrito.filter(pdt => pdt.name !== producto.name)
    this.setState({ carrito:newCarrito })
  }

  aumentarCarrito = (producto) => {
    const { carrito } = this.state
    if (carrito.find(pdt => pdt.name === producto.name)) {
      const newCarrito = carrito.map(prod => prod.name === producto.name
        ? ({
          ...prod,
          cantidad: prod.cantidad + 1
        })
        : prod
      )
      return this.setState({ carrito:newCarrito })
    }
    const newCarrito = carrito.filter(pdt => pdt.name !== producto.name)
    this.setState({ carrito:newCarrito })
  }

  eliminarCarrito = (producto) => {
    const { carrito } = this.state
    if (carrito.find(pdt => pdt.name === producto.name && pdt.cantidad > 1)) {
      const newCarrito = carrito.map(prod => prod.name === producto.name
        ? ({
          ...prod,
          cantidad: 0
        })
        : prod
      )
      return this.setState({ carrito:newCarrito })
    }
    const newCarrito = carrito.filter(pdt => pdt.name !== producto.name)
    this.setState({ carrito:newCarrito })
  }

  render() {
    const { esCarritoVisible } = this.state
    return (
      <div>
        <Nabvar 
          carrito={this.state.carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarro={this.mostrarCarro}
          disminuirCarrito={this.disminuirCarrito}
          aumentarCarrito={this.aumentarCarrito}
          eliminarCarrito={this.eliminarCarrito}
        />
        <Layout>
          <Title />
          <Productos
            productos={ this.state.productos }
            agregarAlCarro={ this.agregarAlCarro } 
          />
        </Layout>
      </div>
    )
  }
}

export default App
