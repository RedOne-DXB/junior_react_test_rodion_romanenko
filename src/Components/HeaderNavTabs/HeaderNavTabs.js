// import PropTypes from 'prop-types';
import s from './HeaderNavTabs.module.css';

function HeaderNavTabs() {
  return (
    <ul className={s.tabList}>
      <li className={s.listItem}>
        <a className={s.linkCurrent} href="./public/index.html">
          Women
        </a>
      </li>
      <li className={s.listItem}>
        <a className={s.link} href="./public/index.html">
          Men
        </a>
      </li>
      <li className={s.listItem}>
        <a className={s.link} href="./public/index.html">
          Kids
        </a>
      </li>
    </ul>
  );
}

export default HeaderNavTabs;
