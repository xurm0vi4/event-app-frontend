import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Event from '../../components/Event';
import Pagination from '../../components/Pagination';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [sortKey, setSortKey] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSortChange = (e) => {
    setSortKey(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/events`, {
          params: { page: currentPage - 1, sortBy: sortKey },
        });
        setEvents(data.events);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, [currentPage, sortKey]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Events</h1>
      <div className={styles.select}>
        <label>Sort by: </label>
        <select value={sortKey} onChange={handleSortChange}>
          <option value="title">Title</option>
          <option value="date">Date</option>
          <option value="organizer">Organizer</option>
        </select>
      </div>
      <div className={styles.events}>
        {events.length > 0 && events.map((event) => <Event {...event} key={event._id} />)}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Events;
