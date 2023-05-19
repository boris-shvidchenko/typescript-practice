import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <nav className='header-main'>
        <section>
          <h1 className='header-title'>My Store</h1>
        </section>
        <section className='header-nav'>
          <Link to='/' className='header-link'>Store</Link>
          <Link to='/cart' className='header-link'>Cart</Link>
          <Link to='/careers' className='header-link'>Careers</Link>
        </section>
      </nav>
    )
  }
  
  