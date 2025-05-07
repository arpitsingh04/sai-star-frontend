import './StatCard.css';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, number, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <Icon size={32} />
      </div>
      <div className="stat-content">
        <h3 className="stat-number">{number}</h3>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
