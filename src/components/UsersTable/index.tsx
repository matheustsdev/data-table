import { useEffect, useState } from 'react';
import { UserProps } from '../../hook/useUsers';
import { AddUserButton } from '../AddUserButton';
import { Checkbox } from '../Checkbox';
import styles from './styles.module.scss';

interface UsersTableProps {
  items: {
    checked: boolean;
    user: UserProps;
  }[];
}

export function UsersTable({ items }: UsersTableProps) {
  function handleActive(i: number) {
    items[i].checked = true;
  }

  function handleInactive(i: number) {
    items[i].checked = false;
  }

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
                isActive={false}
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
          {items.map((item, i) => {
            return (
              <tr key={item.user.id}>
                <td className="checkbox">
                  <Checkbox
                    isActive={item.checked}
                    onActive={() => handleActive(i)}
                    onInactive={() => handleInactive(i)}
                  />
                </td>
                <td>{item.user.id}</td>
                <td>{item.user.name}</td>
                <td>{item.user.cpf}</td>
                <td>{item.user.age}</td>
                <td>{item.user.phone}</td>
                <td>{item.user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
