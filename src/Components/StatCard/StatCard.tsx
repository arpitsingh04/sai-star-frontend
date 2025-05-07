import { useEffect, useState } from 'react';
import './StatCard.css';

type StatCardProps = {
  icon: React.ElementType;
  number: number;
  suffix?: string;
  label: string;
};

const StatCard = ({ icon: Icon, number, suffix = '', label }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // 5 second
    const increment = Math.ceil(number / 40);
    const stepTime = duration / (number / increment);

    const timer = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="stat-card">
      <div className="stat-icon">
        <Icon size={32} />
      </div>
      <div className="stat-content">
        <h3 className="stat-number">{count}{suffix}</h3>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
