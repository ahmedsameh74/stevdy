import './Navbar.css'
//package to make smooth scrolling through the page
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from 'react';

import Menu from "../../assets/icons/menu-black.svg";

const links = [
  { name: "Browsers", href: "#home" },
  { name: "Bootcamps", href: "#Bootcamps" },
  { name: "How it works", href: "#" },
  { name: "Testominials", href: "#" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [menu]);


  return (
    <div className="navbar">
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

      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="menu" />
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