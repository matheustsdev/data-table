import { FaCheck } from 'react-icons/fa';

import styles from './styles.module.scss';

interface CheckboxProps {
  isChecked?: boolean;
  onClick(): void;
}

export function Checkbox({ isChecked = false, onClick }: CheckboxProps) {
  return isChecked ? (
    <div onClick={() => onClick()} className={styles.active}>
      <FaCheck />
    </div>
  ) : (
    <div onClick={() => onClick()} className={styles.inactive} />
  );
}
