import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLogin, selectorToken } from 'redux/auth/authSelectors';

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectorIsLogin);
  const isToken = useSelector(selectorToken);
  if (isToken && !isLoggedIn) {
    return <p>Loading...</p>;
  }
  return isLoggedIn && isToken ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
