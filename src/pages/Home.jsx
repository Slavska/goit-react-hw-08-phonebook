import { useSelector } from 'react-redux';
import { selectorIsLogin } from 'redux/auth/authSelectors';

function Home() {
  const isLoggedIn = useSelector(selectorIsLogin);
  return (
    <>
      <>
        <h2>Welcome</h2>
        {!isLoggedIn && (
          <p>
            Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!
          </p>
        )}
      </>
    </>
  );
}

export default Home;
