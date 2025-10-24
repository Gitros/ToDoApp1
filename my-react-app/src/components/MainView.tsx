import styles from "./MainView.module.css";

const MainView = () => {
  return (
    <main className={styles.main}>
      <div className={styles["task-header"]}>
        <h2 className={styles["task-text"]}>Tasks</h2>
        <button className={styles["add-task-btn"]}>Add task</button>
      </div>
      <ul className={styles["task-list"]}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </main>
  );
};

export default MainView;
