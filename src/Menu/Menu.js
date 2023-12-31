import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav role="navigation" aria-label="Main menu">
    <div className="menu">
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="https://google.com">Google</Link></li>
            {/* <!-- This is an A11y Change -->
            <li><a href="#main-content" class="skip-link">Skip to Main Content</a></li> */}
        </ul>
    </div>
    </nav>
  );
}

export default Menu;