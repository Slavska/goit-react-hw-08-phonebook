import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/authOperations';

export const Registration = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(registrationThunk(user));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl">Registration form </h1>
        <input
          className="border px-2 text-black"
          name="name"
          type="text"
          placeholder="Name..."
        />
        <input
          className="border px-2 text-black"
          name="email"
          autoComplete="off"
          type="text"
          placeholder="Email..."
        />
        <input
          className="border px-2 text-black"
          name="password"
          type="password"
          placeholder="Password..."
        />
        <button className="border bg-blue-600 rounded-md">SignUP</button>
      </form>
    </div>
  );
};
