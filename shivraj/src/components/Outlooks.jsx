// src/components/Outlooks.jsx
import './Outlooks.css';
import blog1Thumb from "../assets/blogs/stoicism.jpeg";
import blog2Thumb from "../assets/blogs/product.png";

import { FiExternalLink } from 'react-icons/fi';

const blogs = [
  {
    id: 1,
    title: 'Modern Stoicism',
    subtitle: 'Why Marcus Aurelius still wins in 2025',
    thumbnail: blog1Thumb,
    summary: 'Exploring how Stoic principles help navigate chaos in today’s hyper-digital world.',
    link: '#',
  },
  {
    id: 2,
    title: 'Designing with Empathy',
    subtitle: 'The secret sauce of great UX',
    thumbnail: blog2Thumb,
    summary: 'How product designers can blend emotion, functionality, and intuition for better user journeys.',
    link: '#',
  },
];

export default function Outlooks() {
  return (
    <section className="outlooks-section">
      <div className="outlooks-overlay">
        <h2 className="outlooks-title">Outlooks</h2>

        <div className="outlooks-grid">
          {blogs.map((blog) => (
            <div className="outlook-card" key={blog.id}>
              <a href={blog.link} target="_blank" rel="noreferrer" className="outlook-float-icon">
                <FiExternalLink />
              </a>
              <img src={blog.thumbnail} alt={blog.title} className="outlook-thumbnail" />
              <div className="outlook-details">
                <h3>{blog.title}</h3>
                <p className="outlook-subtitle">{blog.subtitle}</p>
                <hr className="outlook-divider" />
                <p className="outlook-summary">{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="explore-container">
          <p className="explore-more">Explore All Blogs…</p>
          <span className="explore-icon"><FiExternalLink /></span>
        </div>
      </div>
    </section>
  );
}
