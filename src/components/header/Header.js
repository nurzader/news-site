import React from 'react';
import './header.scss';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">News</Link>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
