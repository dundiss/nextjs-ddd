import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession();
  const router = useRouter();
  //console.log(session);
  
  const logoutHandler = async (e) => {
    e.preventDefault()
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
          <li><div className={classes.phone}><a href="tel:+33123456890">
            <FontAwesomeIcon icon="phone" /></a></div></li>
          {!session && <li>
            <Link href='/auth'><a><FontAwesomeIcon className={classes.loginIcon} icon="fa-user" /><span className={classes.loginButton}>Se connecter</span></a></Link>
          </li>}
          {session && <li>
            <Link href='/profile'><a><FontAwesomeIcon icon="fa-user" /><span className={classes.profilText}> Profil</span></a></Link>
          </li>}
          {session && <li >
            <a><FontAwesomeIcon className={classes.logoutIcon} icon="fa-right-from-bracket" onClick={logoutHandler} /><button className={classes.logoutButton} onClick={logoutHandler}>Se déconnecter</button></a>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
