import { CheckCircle } from 'lucide-react';
import './ServiceItem.css';

interface ServiceItemProps {
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title }) => {
  return (
    <div className="service-item">
      <CheckCircle size={20} className="service-item-icon" />
      <span className="service-item-text">{title}</span>
    </div>
  );
};

export default ServiceItem;