import styles from "../styles/Transition1.module.css";

const Button = () => {
  return (
    <div>
      <div className={styles.button}>
        <button className={styles.button_one}>Saved lists</button>
        <button className={styles.button_two}>Workspaces</button>
        <button className={styles.button_three}>Custom Domains</button>
        <button className={styles.button_four}>Export Options</button>
        <button className={styles.button_five}>Report Sharing</button>
      </div>
    </div>
  );
};

export default Button;