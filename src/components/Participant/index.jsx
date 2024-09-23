import React from 'react';
import styles from './styles.module.scss';

const Participant = ({ fullName, email }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.fullName}>{fullName}</h4>
      <p className={styles.email}>{email}</p>
    </div>
  );
};

export default Participant;
