// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Careers from "./pages/Careers";
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter> 
      <main className='main-app'>
        <Header />
        <Routes>
          <Route path='/' element={<Store />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/careers' element={<Careers />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

