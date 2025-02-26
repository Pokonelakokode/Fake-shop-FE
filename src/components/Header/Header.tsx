import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.side}>
        <button className={styles.menuButton}>☰</button>
      </div>
      <h1 className={styles.title}>Fake Shop</h1>
      <div className={styles.side}>
        <div className={styles.userMenu}>👤</div>
      </div>
    </header>
  );
};

export default Header;
