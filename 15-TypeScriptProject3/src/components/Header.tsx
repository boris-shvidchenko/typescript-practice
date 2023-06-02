import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { StoreContext } from '../context/storeContext';

export default function Header() {

  const {state} = useContext(StoreContext);

  return (
    <nav className='header-main'>
      <section>
        <h1 className='header-title'>My Store</h1>
      </section>
      <section className='header-nav'>
        <Link to='/' className='header-link'>Store</Link>
        <div className='header-div'>
          {/* { totalItems > 0 && <div className='header-cart-count'><span>{totalItems}</span></div> } */}
          <div className='header-cart-count'><span>{state.totalItems}</span></div>
          <Link to='/cart' className='header-link'>Cart</Link>
        </div>
        <Link to='/careers' className='header-link'>Careers</Link>
      </section>
    </nav>
  )
}
  
  