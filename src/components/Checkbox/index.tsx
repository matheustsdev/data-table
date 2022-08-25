import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import styles from './styles.module.scss';

interface ICheckbox {
  isActive: boolean;
  onActive?(): void;
  onInactive?(): void;
}

export function Checkbox({ onActive = () => {}, onInactive = () => {}, isActive }: ICheckbox) {
  function handleInactive() {
    onInactive();
  }

  function handleActive() {
    console.log(isActive);
    onActive();
  }

  return isActive ? (
    <div onClick={() => handleInactive()} className={styles.active}>
      <FaCheck />
    </div>
  ) : (
    <div onClick={() => handleActive()} className={styles.inactive} />
  );
}
