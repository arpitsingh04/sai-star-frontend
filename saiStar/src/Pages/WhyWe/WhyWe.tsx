import { Shield, Award, Star, Clock, Users, PieChart, LineChart, Target } from 'lucide-react';
import StatCard from '../../Components/StatCard/StatCard';
import './WhyWe.css';

const WhyWe = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Clients Served',
    },
    {
      icon: LineChart,
      number: '15+',
      label: 'Years of Experience',
    },
    {
      icon: Award,
      number: '98%',
      label: 'Client Satisfaction',
    },
    {
      icon: Target,
      number: '250+',
      label: 'Successful Projects',
    },
  ];

  return (
    <div className="why-we-page">
      {/* Hero Section */}
      <section className="why-we-hero-section">
        <div className="container">
          <h1>Why Choose Us</h1>
          <p className="why-we-subtitle">
            Discover what sets SAI STAR Consultancy apart and why leading organizations 
            trust us with their most important business challenges.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section approach-detail-section">
        <div className="container">
          <div className="approach-container">
            <div className="approach-content">
              <h2>Our Approach</h2>
              <p>
                At SAI STAR Consultancy, we believe in a collaborative, results-driven approach 
                that focuses on delivering tangible outcomes for our clients. We work closely with 
                your team to understand your unique challenges and develop customized solutions 
                that drive sustainable growth and competitive advantage.
              </p>
              <div className="approach-points">
                <div className="approach-point">
                  <div className="point-icon">
                    <Shield size={24} />
                  </div>
                  <div className="point-content">
                    <h3>Trusted Partnership</h3>
                    <p>
                      We build long-term relationships based on trust, transparency, and mutual respect, 
                      acting as an extension of your team.
                    </p>
                  </div>
                </div>
                <div className="approach-point">
                  <div className="point-icon">
                    <Star size={24} />
                  </div>
                  <div className="point-content">
                    <h3>Proven Expertise</h3>
                    <p>
                      Our consultants bring deep industry knowledge and specialized skills to 
                      address your most complex business challenges.
                    </p>
                  </div>
                </div>
                <div className="approach-point">
                  <div className="point-icon">
                    <Clock size={24} />
                  </div>
                  <div className="point-content">
                    <h3>Timely Delivery</h3>
                    <p>
                      We understand the importance of time in business decisions and commit to 
                      delivering high-quality results within agreed timeframes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="approach-image">
              <img src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our consultative approach" />
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section differentiators-section">
        <div className="container">
          <h2 className="section-title">What Sets Us Apart</h2>
          <div className="differentiators-grid">
            <div className="differentiator-card">
              <div className="differentiator-icon">
                <PieChart size={32} />
              </div>
              <h3>Data-Driven Solutions</h3>
              <p>
                Our recommendations are backed by rigorous analysis and data insights, 
                ensuring that your business decisions are based on solid evidence rather than assumptions.
              </p>
            </div>
            <div className="differentiator-card">
              <div className="differentiator-icon">
                <Users size={32} />
              </div>
              <h3>Cross-Industry Expertise</h3>
              <p>
                We bring best practices and innovative ideas from various industries, 
                giving you a broader perspective and unique solutions to your challenges.
              </p>
            </div>
            <div className="differentiator-card">
              <div className="differentiator-icon">
                <Target size={32} />
              </div>
              <h3>Results-Focused</h3>
              <p>
                We measure our success by your results. Our engagement doesn't end with recommendations—we 
                work alongside you to implement solutions and achieve measurable outcomes.
              </p>
            </div>
            <div className="differentiator-card">
              <div className="differentiator-icon">
                <Award size={32} />
              </div>
              <h3>Industry Recognition</h3>
              <p>
                Our work has been recognized by industry associations and publications for 
                excellence in business consulting and transformational impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="section testimonial-feature-section">
        <div className="container">
          <div className="featured-testimonial">
            <div className="testimonial-quote-mark">"</div>
            <blockquote>
              Working with SAI STAR Consultancy was a game-changer for our business. Their 
              team took the time to understand our unique challenges and delivered a customized 
              strategy that transformed our operations and accelerated our growth. The ROI on 
              our consulting investment has been extraordinary.
            </blockquote>
            <div className="testimonial-author">
              <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="CEO portrait" className="author-image" />
              <div className="author-details">
                <p className="author-name">Michael Reynolds</p>
                <p className="author-title">CEO, Innovate Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section industries-section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-card">
              <h3>Technology</h3>
              <p>
                From startups to established tech companies, we help navigate rapid changes, 
                scale operations, and optimize go-to-market strategies.
              </p>
            </div>
            <div className="industry-card">
              <h3>Healthcare</h3>
              <p>
                We assist healthcare providers and related businesses with operational efficiency, 
                patient experience, and regulatory compliance.
              </p>
            </div>
            <div className="industry-card">
              <h3>Financial Services</h3>
              <p>
                Our expertise helps banks, insurance companies, and fintech firms innovate, 
                manage risk, and enhance customer relationships.
              </p>
            </div>
            <div className="industry-card">
              <h3>Manufacturing</h3>
              <p>
                We support manufacturers in optimizing supply chains, implementing lean processes, 
                and adapting to Industry 4.0 technologies.
              </p>
            </div>
            <div className="industry-card">
              <h3>Retail & E-commerce</h3>
              <p>
                Our strategies help retailers thrive in the digital age, enhance customer experiences, 
                and optimize multichannel operations.
              </p>
            </div>
            <div className="industry-card">
              <h3>Professional Services</h3>
              <p>
                We assist law firms, accounting practices, and other service providers in growing 
                their business and enhancing service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWe;