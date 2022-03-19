import { Fragment, useRef, useState } from "react";
import { fetchProfile } from "../../lib/api";
import Card from "../Card/Card";
import styles from "./Form.module.css";

const Form = function () {
  const [data, setData] = useState({});
  const usernameRef = useRef("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      usernameRef.current.value.trim() === "" ||
      usernameRef.current.value.includes(" ")
    )
      return;

    try {
      const data = await fetchProfile(usernameRef.current.value);
      setData(data);
      setErrorMessage("");
      usernameRef.current.value = "";
    } catch (error) {
      setErrorMessage(error.message);
      setData({});
      usernameRef.current.value = "";
    }
  };

  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter github username"
          ref={usernameRef}
        />
        <button type="submit" className={styles.button}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {data.id && (
        <Card
          avatar={data.avatar_url}
          name={data.name}
          username={data.login}
          publicRepos={data.public_repos}
          publicGists={data.public_gists}
          creationDate={data.created_at}
        />
      )}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </Fragment>
  );
};

export default Form;
