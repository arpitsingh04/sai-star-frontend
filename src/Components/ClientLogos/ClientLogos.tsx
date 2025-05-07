import React from "react";
import "./ClientLogos.css";

const ClientLogos: React.FC = () => {
  const clients = [
    { name: "not found", logo: "/saiStar-client/akinfra.jpeg" },
    // public\saiStar-client\akinfra.jpeg
    { name: "not found", logo: "/saiStar-client/arkan.jpeg" },
    { name: "not found", logo: "/saiStar-client/bhagwati.png" },
    { name: "not found", logo: "/saiStar-client/gami.jpg" },
    { name: "not found", logo: "/saiStar-client/jyoti.jpeg" },
    { name: "not found", logo: "/saiStar-client/kamdhenu.jpg" },
    { name: "not found", logo: "/saiStar-client/krishna.png" },
    { name: "not found", logo: "/saiStar-client/narvang.jpeg" },
    { name: "not found", logo: "/saiStar-client/omsai.png" },
    { name: "not found", logo: "/saiStar-client/panchsheel.png" },
    { name: "not found", logo: "/saiStar-client/rs.jpg" },
    { name: "not found", logo: "/saiStar-client/sdInfra.jpeg" },
    { name: "not found", logo: "/saiStar-client/shreej.png" },
    { name: "not found", logo: "/saiStar-client/shumham.png" },
   
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="section-title">Trusted By Industry Leaders</h2>
        <p className="clients-description">
          We're proud to work with some of the world's most innovative companies
        </p>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.logo} alt={`${client.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
