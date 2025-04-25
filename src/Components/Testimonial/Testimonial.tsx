import './Testimonial.css';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, company, image, testimonial }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-quote">
        <Quote size={36} />
      </div>
      <p className="testimonial-text">{testimonial}</p>
      <div className="testimonial-author">
        <img src={image} alt={name} className="author-image" />
        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <p className="author-company">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;