import { Menu } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";


export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const [showHeader, setShowHeader] = useState(true); // State for header visibility

  useEffect(() => {
    let lastScrollTop = 0; // To track the scroll position

    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // If scrolling down, hide the header
      if (currentScroll > lastScrollTop) {
        setShowHeader(false);
      } else {
        setShowHeader(true); // If scrolling up, show the header
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scrolling
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header style={{ top: showHeader ? "0" : "-10vh" }}>
        <div className='container flexsb'>
          
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link to={links.url} key={i} data-aos='zoom-in-left'>
                {links.text}
              </Link>
            ))}
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  );
};
