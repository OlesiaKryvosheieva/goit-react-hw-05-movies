import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
export const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
