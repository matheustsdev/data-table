import { UserProps } from '../../hook/useUsers';
import { AddUserButton } from '../AddUserButton';
import { Checkbox } from '../Checkbox';
import styles from './styles.module.scss';

interface UsersTableProps {
  users: UserProps[];
}

export function UsersTable({ users }: UsersTableProps) {
  function handleActiveAll() {
    const checkboxs: NodeListOf<HTMLDListElement> = document.querySelectorAll('.checkbox div');

    checkboxs.forEach((el) => el.toggleAttribute('active', true));
  }

  function handleInactiveAll() {
    const checkboxs: NodeListOf<HTMLDListElement> = document.querySelectorAll('.checkbox div');

    checkboxs.forEach((el) => el.toggleAttribute('active', false));
  }

  return (
    <div className={styles.userstable}>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox
                onActive={() => handleActiveAll()}
                onInactive={() => {
                  handleInactiveAll();
                }}
              />
            </th>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Idade</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="checkbox">
                    <Checkbox />
                  </td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.cpf}</td>
                  <td>{user.age}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
