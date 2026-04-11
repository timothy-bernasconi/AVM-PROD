import React, { useState, useEffect, useRef } from 'react';
import styles from './CountDown.module.scss';

const Countdown = () => {

  const targetDate = new Date(2026, 7, 12, 0, 0, 0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });


  const prevValues = useRef({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isOver: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isOver) {
    return <div className={styles['countdown-finished']}>Le compte à rebours est terminé</div>;
  }

  return (
    <div className={styles['countdown-container']}>
      <div className={styles.countdown}>
        <TimeUnit label="Jours" value={timeLeft.days} />
        <TimeUnit label="Heures" value={timeLeft.hours} />
        <TimeUnit label="Minutes" value={timeLeft.minutes} />
        <TimeUnit label="Secondes" value={timeLeft.seconds} />
      </div>
    </div>
  );
};


const TimeUnit = ({ label, value }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [animating, setAnimating] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    

    setAnimating(true);
    const timeout = setTimeout(() => {
      setDisplayValue(value);
      setAnimating(false);
    }, 200); 

    return () => clearTimeout(timeout);
  }, [value]);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <div className={styles.time}>
      <div className={styles.number}>
        <span className={animating ? styles['slide-up'] : ''}>
          {format(displayValue)}
        </span>
      </div>
      <small>{label}</small>
    </div>
  );
};

export default Countdown;