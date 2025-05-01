import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../logo/example logo.png';
import { links, socials } from './DataHeader';
import '../index.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        linksContainerRef.current.style.height = 'auto';
        setShowLinks(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const linkHeight = linkRef.current.scrollHeight;
      linksContainerRef.current.style.height = showLinks ? `${linkHeight}px` : '0px';
    }
  }, [showLinks, isMobile]);

  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={Logo} alt="Logo" width="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={showLinks}
          aria-label="Toggle navigation"
          onClick={() => setShowLinks(!showLinks)}
        >
          <span className="toggler-icon">
            <FaBars className={showLinks ? 'icon-hidden' : 'icon-visible'} />
            <FaTimes className={showLinks ? 'icon-visible' : 'icon-hidden'} />
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${showLinks ? 'show' : ''}`}
          id="navbarNav"
          ref={linksContainerRef}
        >
          <ul className="navbar-nav m-auto mb-2 mb-sm-0 text-center" ref={linkRef}>
            {links.map((link) => (
              <li className="nav-item" key={link.id}>
                <a className="nav-link" href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav d-flex flex-row social-icons">
            {socials.map((social) => (
              <li className="nav-item me-1" key={social.id}>
                <a className="nav-link" href={social.url}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;