import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.scss';

export function FilterBar() {
  return (
    <div className={styles.filterbar}>
      <FiSearch />
      <input placeholder="Find user..." />
    </div>
  );
}
