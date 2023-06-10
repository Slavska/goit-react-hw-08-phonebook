import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorToken } from 'redux/auth/authSelectors';

function PublicRoute({ children, restricted }) {
  const isLoggedIn = useSelector(selectorToken);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to="/contacts" /> : children}</>;
}
export default PublicRoute;
