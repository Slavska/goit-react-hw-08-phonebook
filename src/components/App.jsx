import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/authOperations';
import Home from 'pages/Home';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Register';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound/NotFound';
import AppBar from './AppBar/AppBar';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
