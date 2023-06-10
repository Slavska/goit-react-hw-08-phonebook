import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/authOperations';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector);

  return (
    <>
      <div>
        <p>{`Welcome, ${name}`}</p>
      </div>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Log Out
      </button>
    </>
  );
}

export default UserMenu;
