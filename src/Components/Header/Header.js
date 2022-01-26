import HeaderNavTabs from '../HeaderNavTabs/HeaderNavTabs';
import { LogoImage } from './Image';

import s from './Header.module.css';

function Header({ children }) {
  return (
    <header className={s.header}>
      <div className={s.tabContainer}>
        <HeaderNavTabs />
        <LogoImage />
        <div className={s.buttonWrapper}>{children}</div>
      </div>
    </header>
  );
}

export default Header;
