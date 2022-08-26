import { FormEvent, useState } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import Modal from 'react-modal';
import { UserProps, useUsers } from '../../hook/useUsers';
import styles from './styles.module.scss';

export function AddUserButton() {
  const { users, addUser } = useUsers();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [age, setAge] = useState(18);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleAddUser(e: FormEvent) {
    e.preventDefault();
    const newUser: UserProps = {
      id: users ? String(users.length + 1) : '1',
      name,
      age,
      cpf,
      email,
      phone,
    };

    return addUser(newUser);
  }

  return (
    <>
      <button className={styles.addButton} type={'button'} onClick={() => setIsOpen(true)}>
        <FiUserPlus />
        Adicionar usuário
      </button>
    </>
  );
}
