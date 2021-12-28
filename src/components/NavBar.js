
import logo from '../assets/NavBar/Logo.png'
import { SearchIcon } from '@heroicons/react/solid'
import '../styles/NavBar.css';

function NavBar (){
    return(
        <header className="navbar">
            <img className='navbar-img' src={logo} alt='Logo' />
            <div className='navbar-container'>
                <input className='navbar-input' type={Text} placeholder='Buscar video' />
                <SearchIcon className='navbar-icon' />
            </div>
        </header>
        )
}

export default NavBar;
