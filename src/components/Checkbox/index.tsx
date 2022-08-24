import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import styles from './styles.module.scss';

interface ICheckbox {
  active?: boolean;
  onActive?(): void;
  onInactive?(): void;
}

export function Checkbox({ onActive = () => {}, onInactive = () => {}, active = false }: ICheckbox) {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    onActive();
    setIsActive(true);
  }

  function handleInactive() {
    onInactive();
    setIsActive(false);
  }

  useEffect(() => {
    if (active) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [active]);

  return isActive ? (
    <div onClick={() => handleInactive()} className={styles.active}>
      <FaCheck />
    </div>
  ) : (
    <div onClick={() => handleActive()} className={styles.inactive} />
  );
}
