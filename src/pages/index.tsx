import { FormEvent, useState } from 'react';
import { AddUserButton } from '../components/AddUserButton';
import { Header } from '../components/Header';
import { UsersTable } from '../components/UsersTable';
import { UserProps, useUsers } from '../hook/useUsers';

import styles from './home.module.scss';

export default function Home() {
  const { users, addUser } = useUsers();
  return (
    <>
      <Header />
      <main className={styles.table}>
        <UsersTable users={users} />
      </main>
    </>
  );
}
