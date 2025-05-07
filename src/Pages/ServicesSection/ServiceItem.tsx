import { CheckCircle } from 'lucide-react';
import styles from './ServiceItem.module.css';

interface ServiceItemProps {
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title }) => {
  return (
    <div className={styles.serviceItem}>
      <CheckCircle size={20} className={styles.serviceItemIcon} />
      <span className={styles.serviceItemText}>{title}</span>
    </div>
  );
};

export default ServiceItem;