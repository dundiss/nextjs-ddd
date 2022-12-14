import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import classes from './auth-form.module.css';



const createUser = async (email, password) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!data.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const switchAuthModeHandler = () =>{
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async (event) =>{
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //optional: Add validation

    if (isLogin) {
      //log user in
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword
      });

      console.log(result);
      if (!result.error) {
        router.replace('/profile');
      }
    }
    else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
        router.replace('/');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Se connecter' : 'Créer un compte'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Votre email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Votre mot de passe</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Se connecter' : 'Créer un compte'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Créer un nouveau compte' : 'Se connecter avec un compte existant'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
