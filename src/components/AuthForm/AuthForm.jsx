import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import css from '../Styled.module.css';

function AuthForm() {
  return (
    <nav>
      {
        <Text fontSize="2xl" color="white" textAlign="center">
          Please{' '}
          <Link className={css.LinkAuth} to="/register">
            Sign up
          </Link>{' '}
          or{' '}
          <Link className={css.LinkAuth} to="/login">
            Log in
          </Link>{' '}
          to have access to the Phonebook!
        </Text>
      }
    </nav>
  );
}
export default AuthForm;
