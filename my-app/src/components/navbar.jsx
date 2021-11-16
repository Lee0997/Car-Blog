import React, { useCallback, useState, memo } from "react";
import "../styles/navbar.scss";

import { MdMenu } from "react-icons/md";

const Navbar = memo(({ handleScroll }) => {
  const [active, setActive] = useState(false);

  const click = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__logo">L.A.M.D Car Blog 🚗</div>

          <ul className="navbar__menu">
            <li>
              <button onClick={() => handleScroll("about")}>About us </button>
            </li>
            <li>
              <button onClick={() => handleScroll("blog")}>Blogs</button>
            </li>
          </ul>

          <div className="toggleBtn" onClick={click}>
            <MdMenu />
          </div>
        </nav>
      </header>
      {active && (
        <div className="toggle__menu">
          <ul>
            <li>
              <button
                onClick={() => {
                  handleScroll("about");
                  click();
                }}
              >
                About us
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("blogs");
                  click();
                }}
              >
                Blogs
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
});

export default Navbar;
