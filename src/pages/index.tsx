import { FormEvent, useState } from "react";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import { UsersTable } from "../components/UsersTable";
import { UserProps, useUsers } from "../hook/useUsers";

import styles from "./home.module.scss"

export default function Home() {
  const {users, addUser} = useUsers()
  const [name, setName] = useState("")  
  const [cpf, setCpf] = useState("")  
  const [age, setAge] = useState(18)  
  const [phone, setPhone] = useState("")  
  const [email, setEmail] = useState("")  


  function handleAddUser(e: FormEvent) {
    e.preventDefault()
    const newUser: UserProps = {
      id: users ? String(users.length + 1) : "1",
      name,
      age,
      cpf,
      email,
      phone
    }

    return addUser(newUser)

  }

  return (
    <>
      <Header/>
      <form onSubmit={e => handleAddUser(e)} className={styles.form}>
        <div>
          <div className={styles.inputContainer}>

            <label>
              Nome
            </label>
            <input value={name} onChange={e => setName(e.target.value)}/>
          </div>
          <div className={styles.inputContainer}>

            <label>
              CPF
            </label>
            <input value={cpf} onChange={e => setCpf(e.target.value)}/>
          </div>

          <div className={styles.inputContainer}>

            <label>
              Idade
            </label>
            <input value={age} onChange={e => setAge(Number(e.target.value))}/>
          </div>

        </div>
        <div>

          <div className={styles.inputContainer}>
            <label>
              Telefone
            </label>
            <input value={phone} onChange={e => setPhone(e.target.value)}/>
          </div>

          
          <div className={styles.inputContainer}>
            <label>
              Email
            </label>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
          </div>

          
          <button type="submit">
            Adiconar usuário
          </button>
        </div>
      </form>
      <main className={styles.table}>
        <UsersTable users={users}/>
      </main>
      
    </>
  )


}