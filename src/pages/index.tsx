import { FormEvent, useState } from 'react';
import { AddUserButton } from '../components/AddUserButton';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { UsersTable } from '../components/UsersTable';
import { UserProps, useUsers } from '../hook/useUsers';

import styles from './home.module.scss';

export default function Home() {
  const { users, addUser } = useUsers();
  return (
    <div className={styles.homeContainer}>
      <Sidebar />
      <main className={styles.content}>
        <h1>Lista de usuários</h1>
        <UsersTable users={users} />
      </main>
    </div>
  );
}
