import { useSelector } from 'react-redux';
import { selectorIsLogin } from '../../redux/auth/authSelectors';
import AuthForm from 'components/AuthForm/AuthForm';
import Navigation from '../Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(selectorIsLogin);

  return (
    <>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </div>
    </>
  );
}

export default AppBar;
