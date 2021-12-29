// import PropTypes from 'prop-types';
import s from './HeaderNavTabs.module.css';

function HeaderNavTabs() {
  return (
    <ul className={s.tabList}>
      <li className={s.listItem}>Women</li>
      <li className={s.listItem}>Men</li>
      <li className={s.listItem}>Kids</li>
    </ul>
  );
}

export default HeaderNavTabs;
