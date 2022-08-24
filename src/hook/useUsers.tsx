import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface UserProps {
  id: string;
  name: string;
  cpf: string;
  age: number;
  phone: string;
  email: string;
}

interface UseUserProps {
  users: UserProps[];
  addUser(user: UserProps): void;
}

interface ProviderProps {
  children: ReactNode;
}

const UsersContext = createContext<UseUserProps>({} as UseUserProps);

export function UsersProvider({ children }: ProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([]);

  function addUser(user: UserProps) {
    return setUsers([...users, user]);
  }

  useEffect(() => {
    const data = [
      { id: '1', name: 'Matheus', cpf: '07211101342', age: 24, phone: '85989764833', email: 'matheusts1902@gmail.com' },
      { id: '2', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '3', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '4', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '5', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '6', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '7', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '8', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '9', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
      { id: '10', name: 'Pri', cpf: '07541101342', age: 25, phone: '85989764533', email: 'pri@gmail.com' },
    ];
    setUsers(data);
  }, []);

  return <UsersContext.Provider value={{ users, addUser }}>{children}</UsersContext.Provider>;
}

export function useUsers() {
  const context = useContext(UsersContext);
  return context;
}
