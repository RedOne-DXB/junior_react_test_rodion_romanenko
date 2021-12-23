import HeaderNavTabs from './HeaderNavTabs';

function Header({ children }) {
  return (
    <header>
      <HeaderNavTabs />
      <div>Currency switch</div>
      <a href="././public/index.html">Basket Button</a>
    </header>
  );
}

export default Header;
