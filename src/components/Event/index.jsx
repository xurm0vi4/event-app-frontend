import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Event = ({ _id, title, description, date, organizer }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.info}>
        <p className={styles.organizer}>{organizer}</p>
        <p className={styles.date}>{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className={styles.buttons}>
        <Link to={`/${_id}/registration`} className={styles.register}>
          Register
        </Link>
        <Link to={`/${_id}/participants`} className={styles.view}>
          View
        </Link>
      </div>
    </div>
  );
};

export default Event;
