import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface UserProps {
    id: string,
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
    const [users, setUsers] = useState<UserProps[]>([{id: "1", name: "Matheus", cpf: "07211101342", age: 24, phone: "85989764833", email: "matheusts1902@gmail.com"},
    {id: "2", name: "Pri", cpf: "07541101342", age: 25, phone: "85989764533", email: "pri@gmail.com"}
])

    function addUser(user: UserProps) {
      return  setUsers([...users, user])
    }

    useEffect(()=> {
        console.log(users)
    }, [users])

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  return context;
}