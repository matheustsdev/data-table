import { Sidebar } from '../components/Sidebar';
import { UsersTable } from '../components/UsersTable';
import { useUsers } from '../hook/useUsers';

import styles from './home.module.scss';

export default function Home() {
  const { users } = useUsers();

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
