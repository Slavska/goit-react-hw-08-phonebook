import { Link } from 'react-router-dom';
import { React } from 'react';
import { selectorIsLogin } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Navigation() {
  const isLoggedIn = useSelector(selectorIsLogin);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="contact">Contacts</Link>}
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
