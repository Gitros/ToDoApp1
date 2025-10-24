import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles["side-bar"]}>
      <h1 className={styles.header}>To do App</h1>
      <hr />
      <div className={styles.projects}>
        <h2 className={styles["projects-header"]}>Projects</h2>
        <div className={styles["project-container"]}>
          <p>Project 1</p>
          <p>Project 2</p>
          <p>Project 3</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
