import styles from './ServiceTab.module.css';

interface ServiceTabProps {
  id: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const ServiceTab: React.FC<ServiceTabProps> = ({ id, icon, isActive, onClick }) => {
  return (
    <button 
    className={`${styles.serviceTab} ${isActive ? styles.serviceTabActive : ''}`}

      onClick={onClick}
      aria-selected={isActive}
      role="tab"
    >
      <span className={styles.serviceTabIcon}>{icon}</span>
      <span className={styles.serviceTabText}>{id}</span>
    </button>
  );
};

export default ServiceTab;