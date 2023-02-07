import './Navbar.css'
//package to make smooth scrolling through the page
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from 'react';

import Menu from "../../assets/icons/menu-black.svg";
import Menuw from "../../assets/icons/menu.svg";
import Close from "../../assets/icons/close.svg";

const links = [
  { name: "Browsers", href: "#home" },
  { name: "Bootcamps", href: "#Bootcamps" },
  { name: "How it works", href: "#how" },
  { name: "Testominials", href: "#Testominials" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(null)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    document.onscroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [menu]);

  const src =  menu === null ? Menu : menu === true ? Close : Menuw
    
  


  return (
    <div className={scroll ? "navbar scroll" : 'navbar'}>
      <div className="logo">
        <h1>
          ST<span>v</span>DY
        </h1>
      </div>
      <div className="center">
        {links.map((link) => (
          <AnchorLink href={link.href} key={link.name}>
            {link.name}
          </AnchorLink>
        ))}
      </div>
      <div className="right">
        <button>About us</button>
      </div>

      <div className="menu" onClick={() => {
        setMenu(!menu)
        }}>
        <img src={src} alt="menu" />
      </div>

      <div
        className={
          menu === null ? "none" : menu === true ? "l-navbar" : "l-navbar-oppo"
        }
      >
        {links.map((link) => (
          <AnchorLink
          
            href={link.href}
            key={link.name}
            className={
              menu === null ? "none" : menu === true ? "nav-item" : "none"
            }
            onClick={() => setMenu(false)}
          >
            {link.name}
          </AnchorLink>
        ))}

        
      </div>
    </div>
  );
}

export default Navbar