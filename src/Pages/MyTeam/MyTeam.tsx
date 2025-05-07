import TeamMember from '../../Components/TeamMember/TeamMember';
import './MyTeam.css';

const MyTeam = () => {
  const teamMembers = [
    {
      name: 'Adv. Santosh K. Singh',
      role: 'Legal Advisor  ',
      image: './Team/Santosh.jpeg',
      bio: 'With over 20 years of experience in business strategy and management consulting, Dr. Foster leads our team with expertise in strategic planning, organizational development, and business transformation.',
    },
    {
      name: 'P.Mishra',
      role: 'Financial Advisory LeadProperty & Insurance Matters',
      image: './Team/P.Mishra.jpeg',
      bio: 'Jennifer brings 15+ years of experience in financial strategy, investment banking, and corporate finance. She specializes in helping businesses optimize their financial performance and secure growth capital.',
    },
    // {
    //   name: 'Marcus Johnson',
    //   role: 'Operations Excellence Director',
    //   image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   bio: 'Marcus has transformed operations for companies across various industries. His expertise in process optimization, supply chain management, and lean methodologies drives significant efficiency improvements.',
    // },
    // {
    //   name: 'Sophia Chen',
    //   role: 'Digital Transformation Expert',
    //   image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   bio: 'Sophia leads our digital transformation practice with deep knowledge of emerging technologies, digital strategy, and change management to help businesses navigate the digital landscape successfully.',
    // },
    // {
    //   name: 'Robert Williams',
    //   role: 'Market Research Analyst',
    //   image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   bio: 'Robert brings data-driven insights through advanced market research methodologies. His expertise in consumer behavior, market trends, and competitive analysis helps clients make informed strategic decisions.',
    // },
    // {
    //   name: 'Amelia Rodriguez',
    //   role: 'HR & Organizational Development',
    //   image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   bio: 'Amelia specializes in organizational development, talent management, and leadership training. She helps clients build high-performing teams and create positive organizational cultures.',
    // },
    // {
    //   name: 'James Wilson',
    //   role: 'Sustainability Consultant',
    //   image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   bio: 'James helps organizations develop and implement sustainable business practices. His expertise spans ESG strategy, sustainable operations, and corporate social responsibility initiatives.',
    // },
    // {
    //   name: 'Olivia Taylor',
    //   role: 'Change Management Specialist',
    //   image: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   bio: 'Olivia guides organizations through complex transformations. Her expertise in change management, stakeholder engagement, and communications helps clients navigate transitions with minimal disruption.',
    // },
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero-section">
        <div className="container">
          <h1>Our Team</h1>
          <p className="team-subtitle">
            Meet our team of expert consultants with decades of combined experience 
            across various industries and specializations.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section team-grid-section">
        <div className="container">
          <div className="team-members-grid">
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
        </div>
      </section>

      {/* Our Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>
                We are committed to delivering exceptional quality in everything we do, 
                constantly striving to exceed expectations and achieve outstanding results.
              </p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                We operate with honesty, transparency, and ethical conduct in all our 
                interactions, building trust with our clients and within our team.
              </p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                We embrace creative thinking and seek innovative solutions to complex 
                challenges, staying ahead of industry trends and best practices.
              </p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>
                We believe in the power of teamwork, fostering strong partnerships with 
                our clients and leveraging diverse perspectives for better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section join-team-section">
        <div className="container">
          <div className="join-team-content">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented professionals to join our growing team. 
              If you're passionate about helping businesses succeed and want to work in a 
              collaborative, innovative environment, we'd love to hear from you.
            </p>
            <a href="/contact" className="btn btn-primary">View Open Positions</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyTeam;