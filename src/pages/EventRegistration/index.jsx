import React from 'react';
import styles from './styles.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { fullName: '', email: '', dateOfBirth: '', source: 'Social media' },
    mode: 'onBlur',
  });

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(`https://event-app-backend-nlp9.onrender.com/events/${id}`, values);
      console.log(data);
      alert('Success');
      navigate('/');
    } catch (error) {
      alert('Error');
      console.warn(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Event registration</h2>
      <label className={styles.label}>
        Full name
        <input
          type="text"
          className={styles.input}
          placeholder="Enter your full name"
          {...register('fullName', { required: 'Please, enter your full name', minLength: 5 })}
        />
        {errors?.fullName && <p className={styles.error}>{errors.fullName?.message}</p>}
      </label>
      <label className={styles.label}>
        Email
        <input
          type="text"
          className={styles.input}
          placeholder="Enter your email"
          {...register('email', {
            required: 'Please, enter your email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors?.email && <p className={styles.error}>{errors.email?.message}</p>}
      </label>
      <label className={`${styles.label} ${styles.datePicker}`}>
        Date of birth
        <Controller
          control={control}
          name="dateOfBirth"
          rules={{
            required: 'Please, choose your date of birth',
          }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Select your date of birth"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="yyyy-MM-dd"
            />
          )}
        />
        {errors?.dateOfBirth && <p className={styles.error}>{errors.dateOfBirth?.message}</p>}
      </label>
      <div className={styles.select}>
        <p>Where did you hear about this event?</p>
        <div className={styles.selectWrapper}>
          <label className={styles.selectItem}>
            <input
              type="radio"
              id="socialMedia"
              name="source"
              value="Social media"
              {...register('source')}
            />
            Social media
          </label>
          <label className={styles.selectItem}>
            <input
              type="radio"
              id="friends"
              name="source"
              value="Friends"
              {...register('source')}
            />
            Friends
          </label>
          <label className={styles.selectItem}>
            <input
              type="radio"
              id="foundMyself"
              name="source"
              value="Found myself"
              {...register('source')}
            />
            Found myself
          </label>
        </div>
      </div>
      <button type="submit" className={styles.button}>
        Sumbit
      </button>
    </form>
  );
};

export default EventRegistration;
