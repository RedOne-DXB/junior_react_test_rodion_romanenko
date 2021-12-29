import HeaderNavTabs from '../HeaderNavTabs/HeaderNavTabs';
import s from './Header.module.css';

function Header({ children }) {
  return (
    <header className={s.header}>
      <div className={s.tabContainer}>
        <HeaderNavTabs />
        <div className={s.buttonWrapper}>
          <div>Currency switch</div>
          <a href="././public/index.html">Basket Button</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
