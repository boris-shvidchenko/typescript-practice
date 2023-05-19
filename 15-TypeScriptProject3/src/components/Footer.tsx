import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <footer className='footer-main'>
        <h4>My Store &copy;</h4>
        <p>|</p>
        <Link to='/careers' className='footer-link'>Jobs</Link>
      </footer>
    )
  }
  
  