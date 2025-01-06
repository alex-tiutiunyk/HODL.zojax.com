import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenu, setIsMenu] = React.useState(false);
  const [menuActive, setMenuActive] = React.useState({});
  const [overlayActive, setOverlayActive] = React.useState({});
  const links = ['Buy BTC', 'Sell BTC'];

  const handleMenu = () => {
    setIsMenu((prev) => !prev);
    if (isMenu) {
      setMenuActive(() => {});
      setOverlayActive(() => {});
    } else {
      setMenuActive(() => {
        return { transform: 'translateX(0)', opacity: 1 };
      });
      setOverlayActive(() => {
        return { opacity: 1, zIndex: 100 };
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <strong className={styles.logo}>
          <a href='#' className={styles.logoLink}>
            Zogax
          </a>
        </strong>
        <div className={styles.mobileMenu} style={menuActive}>
          <div className='links'>
            <ul className='list'>
              {links.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <span className='bitcoin'>
              <a href='#'>bitcoin</a>
            </span>
          </div>
          <div className='user-links'>
            <button className='btn btn-text'>Log in</button>
            <button className='btn btn-primary'>Log in</button>
          </div>
        </div>
        <button className={styles.burger} onClick={handleMenu}>
          burger
        </button>
      </div>
      <div className='overlay' style={overlayActive} onClick={handleMenu}></div>
    </header>
  );
};

export default Header;
