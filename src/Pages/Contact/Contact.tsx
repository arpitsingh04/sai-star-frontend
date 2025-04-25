// import { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = {
//       name,
//       email,
//       message,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess('Message sent successfully!');
//         setName('');
//         setEmail('');
//         setMessage('');
//       } else {
//         setSuccess(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       setSuccess('Something went wrong. Please try again later.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="contact-wrapper">
//       {/* <h2 className="contact-title">Get in Touch</h2> */}

//        {/* Hero Section */}
//        <section className="contact-us-hero-section">
//         <div className="container">
//           <h1>Contact Us</h1>
//           <p className="contact-us-subtitle">
//           Get in touch with our team for expert consultancy services tailored to your needs.
//           </p>
//         </div>
//       </section>

//       <div className="contact-content">
//         <div className="contact-form-section">
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               rows={5}
//               placeholder="Your message..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             ></textarea>

//             <button type="submit">Send Message</button>
//             {success && <p className="success-msg">{success}</p>}
//           </form>
//         </div>

//         <div className="contact-map">
//           <iframe
//             title="Sai Star Consultancy Location"
//             src="https://www.google.com/maps?q=Pushp+Sandeep+CHS+Ltd,+Kamothe,+Navi+Mumbai&output=embed"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>

//          {/* FAQ Section */}
//          <section className="section faq-section">
//         <div className="container">
//           <h2 className="section-title">Frequently Asked Questions</h2>
//           <div className="faq-list">
//             <div className="faq-item">
//               <h3>What industries do you specialize in?</h3>
//               <p>
//                 We work with clients across various industries including technology, healthcare,
//                 financial services, manufacturing, retail, and professional services. Our diverse
//                 team has expertise in multiple sectors, allowing us to bring best practices and
//                 innovative solutions to any business.
//               </p>
//             </div>

//             <div className="faq-item">
//               <h3>How do you typically structure your consulting engagements?</h3>
//               <p>
//                 Each engagement is tailored to the client's specific needs. We generally begin with
//                 a discovery phase to understand your challenges, followed by analysis, strategy development,
//                 implementation support, and ongoing evaluation. We offer flexibility in our engagement models,
//                 from project-based work to retainer arrangements.
//               </p>
//             </div>

//             <div className="faq-item">
//               <h3>What is your typical turnaround time for projects?</h3>
//               <p>
//                 Project timelines vary based on scope and complexity. Small, focused projects may take a few
//                 weeks, while comprehensive transformations might span several months. During our initial
//                 consultation, we'll provide a realistic timeline based on your specific requirements.
//               </p>
//             </div>

//             <div className="faq-item">
//               <h3>Do you offer remote consulting services?</h3>
//               <p>
//                 Yes, we offer both on-site and remote consulting services. With today's technology,
//                 we can effectively collaborate regardless of location. We adapt our approach based on
//                 your preferences and the nature of the project.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Contact;

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
// import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  // const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [submissionCount, setSubmissionCount] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("contactSubmissionData");

    if (savedData) {
      const { count, timestamp } = JSON.parse(savedData);
      const now = Date.now();

      // Check if 24 hours passed
      if (now - timestamp >= 24 * 60 * 60 * 1000) {
        // Reset
        localStorage.removeItem("contactSubmissionData");
      } else {
        setSubmissionCount(count);
        if (count >= 5) setIsBlocked(true);
      }
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
    subject: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      name: !formData.name,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      subject: !formData.subject,
      message: !formData.message,
    };

    setFormErrors(errors);

    // if (!captchaValid) {
    //   alert("Please verify that you are not a robot.");
    //   return;
    // }

    if (!Object.values(errors).some(Boolean)) {
      setIsSubmitting(true);

      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        // Increment the submission count ( for preventing submit spamming )
        const newCount = submissionCount + 1;
        const now = Date.now();

        const submissionData = {
          count: newCount,
          timestamp: now,
        };

        localStorage.setItem(
          "contactSubmissionData",
          JSON.stringify(submissionData)
        );
        setSubmissionCount(newCount);

        if (newCount >= 5) {
          setIsBlocked(true);
          alert(
            "You have reached the maximum number of submissions in 24 hours."
          );
        } else {
          alert("Thank you for your message. We will get back to you soon!");
        }

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // recaptchaRef.current?.reset();
        setCaptchaValid(false);
      } catch (error) {
        console.error("Email sending failed:", error);
        alert("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-container">
      {/* <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>
      </div> */}

      {/* Hero Section */}
      <section className="contact-us-hero-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="contact-us-subtitle">
            Get in touch with our team for expert consultancy services tailored
            to your needs.
          </p>
        </div>
      </section>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="contact-info-item">
            <div className="icon-wrapper">
              <MapPin />
            </div>
            <div className="contact-info-content">
              <h3>Our Office</h3>
              <p>123 Business Center, Sector 10</p>
              <p>Navi Mumbai, Maharashtra 400001</p>
              <p>India</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-wrapper">
              <Phone />
            </div>
            <div className="contact-info-content">
              <h3>Phone</h3>
              <a href="tel:+919876543210">+91 9876543210</a>
              <a href="tel:+919876543211">+91 9876543211</a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-wrapper">
              <Mail />
            </div>
            <div className="contact-info-content">
              <h3>Email</h3>
              <a href="mailto:info@saistarconsultancy.com">
                info@saistarconsultancy.com
              </a>
              <a href="mailto:support@saistarconsultancy.com">
                support@saistarconsultancy.com
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="icon-wrapper">
              <Clock />
            </div>
            <div className="contact-info-content">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="required" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={formErrors.name ? "error" : ""}
                />
              </div>

              <div className="form-group">
                <label className="required" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={formErrors.email ? "error" : ""}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label className="required" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={formErrors.subject ? "error" : ""}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="required" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your requirements or questions..."
                className={formErrors.message ? "error" : ""}
              ></textarea>
            </div>
            {/* <div className="form-captcha">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY!}
              onChange={handleCaptchaChange}
              className="recaptcha"
            /></div> */}
            <div className="form-button">
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting || isBlocked}
              >
                {isBlocked
                  ? "Limit Reached Try After 24hr"
                  : isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60552.92582162781!2d73.00367524863278!3d19.03790150000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xef26c52d7d73816e!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720198362147!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What industries do you specialize in?</h3>
              <p>
                We work with clients across various industries including
                technology, healthcare, financial services, manufacturing,
                retail, and professional services. Our diverse team has
                expertise in multiple sectors, allowing us to bring best
                practices and innovative solutions to any business.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                How do you typically structure your consulting engagements?
              </h3>
              <p>
                Each engagement is tailored to the client's specific needs. We
                generally begin with a discovery phase to understand your
                challenges, followed by analysis, strategy development,
                implementation support, and ongoing evaluation. We offer
                flexibility in our engagement models, from project-based work to
                retainer arrangements.
              </p>
            </div>

            <div className="faq-item">
              <h3>What is your typical turnaround time for projects?</h3>
              <p>
                Project timelines vary based on scope and complexity. Small,
                focused projects may take a few weeks, while comprehensive
                transformations might span several months. During our initial
                consultation, we'll provide a realistic timeline based on your
                specific requirements.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer remote consulting services?</h3>
              <p>
                Yes, we offer both on-site and remote consulting services. With
                today's technology, we can effectively collaborate regardless of
                location. We adapt our approach based on your preferences and
                the nature of the project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
