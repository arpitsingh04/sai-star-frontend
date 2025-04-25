import './ServiceTab.css';

interface ServiceTabProps {
  id: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const ServiceTab: React.FC<ServiceTabProps> = ({ id, icon, isActive, onClick }) => {
  return (
    <button 
      className={`service-tab ${isActive ? 'service-tab-active' : ''}`}
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
    >
      <span className="service-tab-icon">{icon}</span>
      <span className="service-tab-text">{id}</span>
    </button>
  );
};

export default ServiceTab;