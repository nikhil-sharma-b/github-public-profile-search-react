import styles from "./Card.module.css";
import CardFields from "./CardFields";

const Card = function ({
  avatar,
  name,
  username,
  publicRepos,
  publicGists,
  creationDate,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar-img" className={styles.avatarImage} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <CardFields title="Username" value={username} />
        <CardFields title="No. of public repos" value={publicRepos} />
        <CardFields title="No. of public gists" value={publicGists} />
        <CardFields
          title="Profile Creation Date"
          value={creationDate?.split("T")[0]}
        />
      </div>
    </div>
  );
};

export default Card;
