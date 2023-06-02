// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Careers from "./pages/Careers";
import Jobs from "./pages/Jobs";
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Context
import { Provider } from "./context/storeContext";

export default function App() {
  return (
    <Provider>
      <BrowserRouter> 
        <main className='main-app'>
          <Header />
          <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/careers'>
              <Route index element={<Careers />} />
              <Route path=':id' element={<Jobs />} /> 
            </Route>
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </Provider>
  )
}

