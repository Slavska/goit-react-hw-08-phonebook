import { React } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { selectorIsLogin } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import css from '../Styled.module.css';
import { Box, Container } from '@chakra-ui/react';

export default function Navigation() {
  const isLoggedIn = useSelector(selectorIsLogin);
  return (
    <Box w="auto" bgGradient="linear(to-r, pink.200, purple.500)">
      <Container
        bgGradient="linear(to-r, pink.200, purple.500)"
        w="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Container>
          <Link className={css.LinkNav} to="/" replace>
            HOME
          </Link>
          {isLoggedIn && (
            <Link className={css.LinkNav} to="contacts" replace>
              CONTACTS
            </Link>
          )}
        </Container>
        {isLoggedIn && <UserMenu />}
      </Container>
      <Outlet />
    </Box>
  );
}
