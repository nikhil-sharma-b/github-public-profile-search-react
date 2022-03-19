import styles from "./CardFields.module.css";

const CardFields = function ({ title, value }) {
  return (
    <div className={styles.fields}>
      <p className={styles.fieldTitle}>{title}</p>
      <p className={styles.fieldValue}>{value}</p>
    </div>
  );
};

export default CardFields;
