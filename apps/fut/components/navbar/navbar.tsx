import styles from './navbar.module.scss';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles['container']}>
      <Link href="/">
        <h1>YeScore</h1>
      </Link>

      <div className={styles['container-button']}>
        <button className="button-primary">Se connecter</button>
        <button className="button-secondary">S'inscrire</button>
      </div>
    </div>
  );
}

export default Navbar;
