import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Briefcase, Users, PieChart, Rocket } from 'lucide-react';
import Button from '../../Components/Button/Button';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import Testimonial from '../../Components/Testimonial/Testimonial';
import TeamMember from '../../Components/TeamMember/TeamMember';
import ContactSection from '../../Components/ContactSection/ContactSection';
import './Home.css';

const Home = () => {
  // Sample data
  const services = [
    {
      icon: TrendingUp,
      title: 'Business Strategy',
      description: 'Develop robust business strategies that drive growth and competitive advantage in your market.',
    },
    {
      icon: BarChart3,
      title: 'Financial Advisory',
      description: 'Expert financial guidance to optimize your capital structure, manage risks, and improve profitability.',
    },
    {
      icon: Briefcase,
      title: 'Market Research',
      description: 'Data-driven market analysis to identify opportunities, understand competitors, and target customers effectively.',
    },
    {
      icon: PieChart,
      title: 'Operational Excellence',
      description: 'Streamline processes, reduce costs, and enhance operational efficiency across your organization.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechNova Inc.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      testimonial: 'SAI STAR Consultancy transformed our business strategy, resulting in a 40% growth within just six months. Their expertise and personalized approach made all the difference.',
    },
    {
      name: 'Michael Chen',
      company: 'Global Logistics Ltd.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      testimonial: 'The operational excellence program designed by SAI STAR helped us reduce costs by 25% while improving service quality. I highly recommend their services.',
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Alan Foster',
      role: 'Strategy Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: '15+ years of experience in strategic planning and business development across multiple industries.',
    },
    {
      name: 'Jennifer Lee',
      role: 'Financial Advisor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Certified financial analyst with expertise in corporate finance, investment strategies, and risk management.',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Strategic Solutions for Business Growth</h1>
            <p className="hero-subtitle">
              Transforming organizations with expert guidance, data-driven insights, and tailored strategies.
            </p>
            <div className="hero-cta">
              <Link to="/contact">
                <Button variant="primary" size="large">Contact us</Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="large">Our Services</Button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Business consultancy" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-container">
            <div className="about-image">
              <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About SAI STAR Consultancy" />
            </div>
            <div className="about-content">
              <h2>About SAI STAR Consultancy</h2>
              <p>
                With over 15 years of industry experience, SAI STAR Consultancy specializes in providing strategic 
                business solutions that drive sustainable growth and competitive advantage.
              </p>
              <p>
                Our team of expert consultants work closely with clients across various industries to understand 
                their unique challenges and deliver customized strategies that yield measurable results.
              </p>
              <div className="about-features">
                <div className="feature">
                  <Rocket size={24} />
                  <span>Results-Driven Approach</span>
                </div>
                <div className="feature">
                  <Users size={24} />
                  <span>Expert Consultants</span>
                </div>
                <div className="feature">
                  <Briefcase size={24} />
                  <span>Industry Experience</span>
                </div>
              </div>
              <Link to="/why-we">
                <Button variant="primary">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Key Services</h2>
          <p className="section-subtitle">
            We offer a comprehensive range of consultancy services tailored to meet your business needs.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services">
              <Button variant="secondary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">
            Hear what our clients have to say about working with SAI STAR Consultancy.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Our consultants bring decades of experience across various industries.
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
          <div className="team-cta">
            <Link to="/team">
              <Button variant="secondary">View Full Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="section contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Contact us today to schedule a consultation and discover how SAI STAR Consultancy 
                can help your business reach its full potential.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="large">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <ContactSection />
    </div>
  );
};

export default Home;