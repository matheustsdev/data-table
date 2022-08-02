import { UserProps } from '../../hook/useUsers';
import styles from './styles.module.scss'

interface UsersTableProps {
    users: UserProps[]
}

export function UsersTable({users}: UsersTableProps) {


    return (
        <table className={styles.userstable}>
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        CPF
                    </th>
                    <th>
                        Idade
                    </th>
                    <th>
                        Telefone
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                  users && (users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.cpf}</td>
                                <td>{user.age}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    }))
                }
            </tbody>
        </table>
    )


}