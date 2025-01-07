import React from 'react';
import './header.scss';

const Header = () => {
  const [isMenu, setIsMenu] = React.useState(false);
  const [menuActive, setMenuActive] = React.useState({});
  const [overlayActive, setOverlayActive] = React.useState({});
  const links = [
    {
      value: 'Buy BTC',
      class: null,
    },
    {
      value: 'Sell BTC',
      class: null,
    },
    {
      value: 'P2P Lending',
      class: 'bitcoin',
    },
  ];

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
        return { opacity: 1, width: '100%', height: '100vh' };
      });
    }
  };

  return (
    <header id='header'>
      <div className='header__container'>
        <strong className='logo'>
          <a href='#' className='logo__link'>
            Zogax
          </a>
        </strong>
        <div className='mobile-menu' style={menuActive}>
          <div className='mobile-menu__btn-holder'>
            <button className='mobile-menu__close' onClick={handleMenu}>
              x
            </button>
          </div>
          <div className='mobile-menu_content scroll'>
            <div className='mobile-menu__links'>
              <ul className='mobile-menu__list'>
                {links.map((item, i) => (
                  <li key={i} className={item.class}>
                    <a href='#'>
                      <span className='text'>{item.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mobile-menu_user-links'>
              <a href='#' className='btn btn-primary'>
                Sign up
              </a>
              <a href='#' className='btn'>
                Log in
              </a>
            </div>
          </div>
        </div>
        <button className='burger' onClick={handleMenu}>
          burger
        </button>
      </div>
      <div className='overlay' style={overlayActive} onClick={handleMenu}></div>
    </header>
  );
};

export default Header;
