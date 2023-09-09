import { pageLinks } from '../data';
import { socialLinks } from '../data';
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((i) => {
          return (
            <li key={i.id}>
              <a href={i.href} className='footer-link' rel='noreferrer'>
                {i.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
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
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
