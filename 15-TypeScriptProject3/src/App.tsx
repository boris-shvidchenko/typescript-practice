// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Careers from "./pages/Careers";
// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Hooks
import { createContext, useReducer } from 'react';
// Context
// import { state, dispatch } from "./context/storeContext";


// // Initial State
// type initialStateType = {
//   items: any[];
// }

// export const StoreContext = createContext<initialStateType | null>(null);

export default function App() {

    // const initialState: initialStateType = {
    //     items: [],
    // }

    // // Action type
    // type actionType = {
    //     type: string,
    //     payload: any,
    // }

    // // Reducer
    // const [state, dispatch] = useReducer(reducer, initialState);

    // function reducer(state: initialStateType, action: actionType) {
    //     switch (action.type) {
    //         case 'UPDATE_ITEMS':
    //             return {...state, items: action.payload}
    //         default:
    //             return state;
    //     }
    // }


  return (
    <StoreContext.Provider value={{state, dispatch}}>
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
    </StoreContext.Provider>
  )
}

