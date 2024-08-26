import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav >
            {/* <Link to='/' className='px-2' >Home</Link> */}
            <Link to='/about' className='px-2' >About</Link>
            <Link to='/contact' className='px-2' >Contact</Link>
            <Link to='/projects' className='px-2' >Projects</Link>
            <a href="./assets/projects.json" download className='btn btn-secondary'>Resume</a>
        </nav>
    );
}
