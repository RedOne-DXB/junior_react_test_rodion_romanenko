import HeaderNavTabs from '../HeaderNavTabs/HeaderNavTabs';
import { LogoImage, CartImage, CurrencyImage } from './Image';

import s from './Header.module.css';

function Header({ children }) {
  return (
    <header className={s.header}>
      <div className={s.tabContainer}>
        <HeaderNavTabs />
        <LogoImage />
        <div className={s.buttonWrapper}>
          <CurrencyImage />
          <CartImage />
        </div>
      </div>
    </header>
  );
}

export default Header;
