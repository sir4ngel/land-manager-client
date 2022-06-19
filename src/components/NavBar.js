import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav'>
      <div className='nav-buttons'>
        <Link style={{textDecoration: 'none', color: '#eee'}} to={'/'}>Administrador de campos</Link>
      </div>
    </nav>
  )
}
