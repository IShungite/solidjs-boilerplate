import { createForm } from '@felte/solid';
import { validator } from '@felte/validator-zod';
import { createSignal } from 'solid-js';
import { User, userSchema } from '../Interfaces/User';

const Login = () => {
  const [isLoading, setIsLoading] = createSignal(false);

  const onSubmit = async (form: User) => {
    setIsLoading(true);
    // eslint-disable-next-line no-console
    console.log(form);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const { form, errors } = createForm<User>({
    extend: [
      validator({ schema: userSchema }),
    ],
    onSubmit,
  });

  return (
    <div>
      <div>Login</div>

      <form ref={form}>
        <label for="username">Username</label>
        <input type="text" name="username" />
        {errors().username && <p>{errors().username}</p>}

        <label for="password">Password</label>
        <input type="password" name="password" />
        {errors().password && <p>{errors().password}</p>}

        <button type="submit">{isLoading() ? 'Loading...' : 'Login'}</button>
      </form>
    </div>
  );
};

export default Login;
