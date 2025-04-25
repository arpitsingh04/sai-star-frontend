import './ServiceCard.css';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon size={32} />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href="/services" className="service-link">Learn More</a>
    </div>
  );
};

export default ServiceCard;