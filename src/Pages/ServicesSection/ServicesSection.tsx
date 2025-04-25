import React, { useState } from 'react';
import ServiceTab from './ServiceTab';
import ServiceItem from './ServiceItem';
import ContactSection from '../../Components/ContactSection/ContactSection';
import { 
  Building2, FileText, Home, Building, Scale, ShieldCheck 
} from 'lucide-react';
import './ServicesSection.css';

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Society Work');

  const tabs = [
    { id: 'Society Work', icon: <Building2 size={20} /> },
    { id: 'Building Redevelopment', icon: <Building size={20} /> },
    { id: 'RERA Work', icon: <FileText size={20} /> },
    { id: 'Real Estate', icon: <Home size={20} /> },
    { id: 'Legal', icon: <Scale size={20} /> },
    { id: 'Insurance', icon: <ShieldCheck size={20} /> },
  ];

  const services = {
    'Society Work': {
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      description: 'We "SAI STAR CONSULTANCY" (EXPERT IN SOCIETY MANAGEMENT WORK) are committed to providing the best legal & advisory services to the housing societies.',
      left: [
        { id: 1, title: 'Society Registration' },
        { id: 2, title: 'Conveyance Deed' },
        { id: 3, title: 'Deemed Conveyance' },
        { id: 4, title: 'Lease Deed' },
        { id: 5, title: 'CIDCO Transfer' },
        { id: 6, title: 'CIDCO NOC' },
      ],
      right: [
        { id: 7, title: 'Society Management' },
        { id: 8, title: 'Society Accounting' },
        { id: 9, title: 'Society Audit' },
        { id: 10, title: 'Recovery Under MCS Act. 154B/29(101)' },
        { id: 11, title: 'All types of Agreement Registration' },
        { id: 12, title: 'Stamp Duty Payment' },
      ]
    },
    'Building Redevelopment': {
      image: 'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg',
      description: 'Our redevelopment consultancy helps societies navigate through the complex process from conception to completion.',
      left: [
        { id: 1, title: 'Building Repairing/repainting' },
        { id: 2, title: 'Building Redevelopment' },
      ],
      right: [
        { id: 3, title: 'Self-Redevelopment' },
        { id: 4, title: 'PMC (Project Management Consultants)' },
      ]
    },
    'RERA Work': {
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      description: 'We specialize in all aspects of Real Estate Regulatory Authority compliance and documentation.',
      left: [
        { id: 1, title: 'RERA Agent Registration' },
        { id: 2, title: 'RERA Project Registration' },
      ],
      right: [
        { id: 3, title: 'RERA Compliance' },
      ]
    },
    'Real Estate': {
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      description: 'Our real estate services cover all aspects of property transactions and management.',
      left: [
        { id: 1, title: 'Property Buy, Sale and Rent' },
        { id: 2, title: 'Plot Buy, Sale' },
      ],
      right: [
        { id: 3, title: 'Interior & Exterior Work' },
        { id: 4, title: 'Civil Work' },
      ]
    },
    'Legal': {
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
      description: 'Our comprehensive legal services cover a wide range of requirements for individuals and organizations.',
      left: [
        { id: 1, title: 'Civil Case' },
        { id: 2, title: 'Consumer Case' },
        { id: 3, title: 'Family Matter Criminal Case' },
        { id: 4, title: 'Cheque Bounce' },
      ],
      right: [
        { id: 5, title: 'Legal Consultation' },
        { id: 6, title: 'Affidavit' },
        { id: 7, title: 'Motor Accident Insurance Claim' },
        { id: 8, title: 'Labour Accident Insurance Claim' },
      ]
    },
    'Insurance': {
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
      description: 'We provide complete insurance advisory services for personal and property protection.',
      left: [
        { id: 1, title: 'LIC' },
        { id: 2, title: 'Health Insurance' },
      ],
      right: [
        { id: 3, title: 'Term Plan' },
      ]
    }
  };

  return (

    
    <div className="services-container">

       {/* Hero Section */}
       <section className="services-hero-section">
        <div className="container">
          <h1>Our Services</h1>
          <p className="services-subtitle">
          Comprehensive consultancy services tailored to meet your society management, legal, and real estate needs.
          </p>
        </div>
      </section>

      <div className="services-tabs">
        {tabs.map((tab) => (
          <ServiceTab
            key={tab.id}
            id={tab.id}
            icon={tab.icon}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      
      <div className="services-content">
        <div className="services-image-container">
          <img 
            src={services[activeTab as keyof typeof services].image}
            alt={`${activeTab} services`}
            className="services-image"
          />
        </div>
        
        <div className="services-details">
          <h1 className="services-title">{activeTab}</h1>
          
          <p className="services-description">
            {services[activeTab as keyof typeof services].description}
          </p>
          
          <h2 className="services-subtitle">Our Services Include:</h2>
          
          <div className="services-list">
            <div className="services-column">
              {services[activeTab as keyof typeof services].left.map((service) => (
                <ServiceItem key={service.id} title={service.title} />
              ))}
            </div>
            
            <div className="services-column">
              {services[activeTab as keyof typeof services].right.map((service) => (
                <ServiceItem key={service.id} title={service.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default ServicesSection;