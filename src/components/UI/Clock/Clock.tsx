import { useEffect, useState } from 'react';
import styles from './Clock.module.scss';

export const Clock = () => {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minuset, setMinuset] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  const countDown = () => {
    const destination = new Date('07 07 2023').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < now) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinuset(0);
        setSeconds(0);
      } else {
        setDays(days);
        setHours(hours);
        setMinuset(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className={styles.clockWrapper}>
      <div className={styles.clockData}>
        <div className={styles.time}>
          <h1>{days}</h1>
          <h5>Days</h5>
        </div>
        <span>:</span>
      </div>
      <div className={styles.clockData}>
        <div className={styles.time}>
          <h1>{hours}</h1>
          <h5>Hours</h5>
        </div>
        <span>:</span>
      </div>
      <div className={styles.clockData}>
        <div className={styles.time}>
          <h1>{minuset}</h1>
          <h5>Minutes</h5>
        </div>
        <span>:</span>
      </div>
      <div className={styles.clockData}>
        <div className={styles.time}>
          <h1>{seconds}</h1>
          <h5>Seconds</h5>
        </div>
      </div>
    </div>
  );
};
