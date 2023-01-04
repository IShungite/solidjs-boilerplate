import { Link } from '@solidjs/router';
import './header.css';

const Header = () => (
  <header id="header">
    <nav id="nav">
      <h1>The Counterfeit Museum</h1>
      <Link href="/">Accueil</Link>
      <Link href="/login">Connexion</Link>
      <Link href="/register">Inscription</Link>
    </nav>
  </header>
);

export default Header;
