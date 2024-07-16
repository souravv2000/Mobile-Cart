import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Components/Cart/Cart'
import Header from './Components/Head/Header'

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogWugZAGxiDmC8ozGGNDChWvUVDY70K5QZw&s",name: "Samsung Galaxy S8", price: 399.99, count: 1 },
    { id: 2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSda29dzavbo_sNamhR48FK9J-6YSCi6B_Fdg&s",name: "Google Pixel", price: 499.99, count: 1 },
    { id: 3, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IC6MtAx17Wsv9DJvBW7ZLEu6ZSxy33Hpfw&s",name: "Xioami Redmi Note 2", price: 699.99, count: 1},
    { id: 4, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b6cg4k9L0ZK9G_7d_Rq6Vdy5FR6cOWsXlw&s", name: "Samsung Galaxy S7", price: 599.99, count: 1 },
  ])

  return (
    <>
      <div>
        <Header cartItems={cartItems}/>
        <div className='mainContainer'>
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
      </div>
    </>
  )
}

export default App
