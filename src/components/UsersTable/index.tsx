import { useEffect, useState } from 'react';
import { UserProps } from '../../hook/useUsers';
import { Checkbox } from '../Checkbox';
import styles from './styles.module.scss';

interface UsersTableProps {
  users: UserProps[];
}

interface UserWithCheckedProp extends UserProps {
  checked: boolean;
}

export function UsersTable({ users }: UsersTableProps) {
  const [usersWithChecked, setUserWithChecked] = useState<UserWithCheckedProp[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  function handleToggleSelectAll() {
    const newUserList = usersWithChecked.map((user) => {
      const updatedObj = {
        ...user,
        checked: !isAllChecked,
      };
      return updatedObj;
    });

    setIsAllChecked(!isAllChecked);
    setUserWithChecked(newUserList);
  }

  function handleToggleChecked(id: string) {
    setUserWithChecked((prevState) => {
      const newList = prevState.map((user) => {
        let updatedUser: UserWithCheckedProp;

        user.id === id ? (updatedUser = { ...user, checked: !user.checked }) : (updatedUser = user);

        return updatedUser;
      });
      return newList;
    });
  }

  useEffect(() => {
    const usersWithCheckProp: UserWithCheckedProp[] = users.map<UserWithCheckedProp>((user) => {
      const newObj = {
        ...user,
        checked: false,
      };
      return newObj;
    });
    setUserWithChecked(usersWithCheckProp);
  }, [users]);

  return (
    <div className={styles.userstable}>
      <table>
        <thead>
          <tr>
            <th>
              <Checkbox onClick={() => handleToggleSelectAll()} isChecked={isAllChecked} />
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
          {usersWithChecked.map((user, i) => {
            return (
              <tr key={user.id}>
                <td className="checkbox">
                  <Checkbox isChecked={user.checked} onClick={() => handleToggleChecked(user.id)} />
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
