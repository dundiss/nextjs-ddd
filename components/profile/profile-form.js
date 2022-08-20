import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm({onChangePassword}) {
  const newPasswordRef = useRef();
  const oldPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    //optional: Add validation

    onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword
    });
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>Nouveau mot de passe</label>
        <input type='password' id='new-password' ref={newPasswordRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Ancien mot de passe</label>
        <input type='password' id='old-password' ref={oldPasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Changer votre mot de passe</button>
      </div>
    </form>
  );
}

export default ProfileForm;
