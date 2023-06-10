import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(user));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-darkMain">
      <form
        className="flex gap-6 text-white flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl">Login Form</h1>
        <input
          className="border px-2 text-black"
          name="email"
          placeholder="Email..."
          type="text"
        />
        <input
          className="border px-2 text-black"
          name="password"
          placeholder="Password..."
          type="password"
        />
        <button className="border bg-blue-600 rounded-md">Login</button>
      </form>
    </div>
  );
};
