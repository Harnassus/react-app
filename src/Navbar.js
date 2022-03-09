import logo from './assets/logo.png'

const Navbar = () => {
    return (
        <nav className='nav'>
            <img alt="logo" src={logo} className='nav-logo' />
            <h3 className='logo-text'>My travel journal</h3>
        </nav>
    )
}

export default Navbar;