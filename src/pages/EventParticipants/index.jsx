import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Participant from '../../components/Participant';

const EventParticipants = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const { id } = useParams();

  const filteredParticipants =
    data?.participants &&
    data.participants.filter((item) => {
      const fullName = item.fullName.toLowerCase();
      const email = item.email.toLowerCase();
      return fullName.includes(search.toLowerCase()) || email.includes(search.toLowerCase());
    });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/events/${id}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>"{data && data.title}" participants</h2>
      <div className={styles.search}>
        <h4>Search participants by full name or email</h4>
        <input
          type="text"
          placeholder="Enter full name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.participants}>
        {filteredParticipants?.map((participant) => (
          <Participant {...participant} key={participant._id} />
        ))}
      </div>
      <Link to="/" className={styles.link}>
        Back to events
      </Link>
    </div>
  );
};

export default EventParticipants;
