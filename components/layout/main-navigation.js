import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession();
  //console.log(session);
  
  const logoutHandler = () => {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href='/'>
        <a className={classes.logoBox}>
          <div className={classes.logo}>3D</div>
          <div className={classes.logo2}>Délices De Diebs</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && <li>
            <Link href='/auth'>Se connecter</Link>
          </li>}
          {session && <li>
            <Link href='/profile'>Profil</Link>
          </li>}
          {session && <li>
            <button onClick={logoutHandler}>Se déconnecter</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
