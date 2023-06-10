import { Link } from 'react-router-dom';

function AuthForm() {
  return (
    <nav>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Log in</Link>
    </nav>
  );
}
export default AuthForm;
