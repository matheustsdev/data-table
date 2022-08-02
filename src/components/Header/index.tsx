import { FilterBar } from '../FilterBar'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <h1>Client Info</h1>
            <FilterBar/>
        </header>
    )


}