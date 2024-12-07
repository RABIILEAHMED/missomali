import styles from "./header.module.scss"
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <ul>
            <li><a href="#">ATU VOTING</a></li>
            <li><a href="#">All Competitors</a></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
