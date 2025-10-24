import styles from "./MainView.module.css";

const MainView = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.task-Header}>Tasks</h2>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </main>
  );
}

export default MainView;