import React from "react";
import ContactFormManager from "../contactFormManager";
import styles from "./App.module.css";

export default (App) => {
  return (
    <div className={styles.container}>
      <h1>goit-react-hw-02-phonebook</h1>
      <ContactFormManager />
    </div>
  );
};
