import logo from '../images/logo.svg';
import { pageLinks } from '../data';
import { socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((i) => {
            const { id, href, text } = i;
            return (
              <li key={id}>
                <a href={href} className='nav-link'>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((social) => {
            const { id, icon, href } = social;
            return (
              <li>
                <a
                  key={id}
                  href={href}
                  target='_blank'
                  className='nav-icon'
                  rel='noreferrer'
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
