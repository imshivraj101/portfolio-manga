import './Ideas.css';
import { FiExternalLink } from 'react-icons/fi';

import stoicThumb from '../assets/stoic.png';
import travelThumb from '../assets/travel.jpg';

const ideas = [
  {
    id: 1,
    title: 'Stoiric',
    role: 'UI/UX & Product Designer',
    description:
      'A daily companion to help you practice Stoic principles through tasks, quotes, and journaling.',
    thumbnail: stoicThumb,
    link: '#',
  },
  {
    id: 2,
    title: 'Travel-lore',
    role: 'UI/UX & Product Designer',
    description:
      'Travel meets storytelling — share locations with memories and personal narratives.',
    thumbnail: travelThumb,
    link: '#',
  },
];

export default function Ideas() {
  return (
    <section className="ideas-section">
      <div className="ideas-overlay">
        <h2 className="ideas-title">Ideas</h2>

        <div className="ideas-grid">
          {ideas.map((idea) => (
            <div className="idea-card" key={idea.id}>
              {/* External icon pinned absolutely */}
              <a
  href={idea.link}
  target="_blank"
  rel="noreferrer"
  className="idea-float-icon"
>
  <FiExternalLink />
</a>

              <img
                src={idea.thumbnail}
                alt={idea.title}
                className="idea-thumbnail"
              />
              <div className="idea-details">
                <h3>{idea.title}</h3>
                <p className="idea-role">Role: {idea.role}</p>
                <hr className="idea-divider" />
                <p className="idea-desc">{idea.description}</p>
              </div>
            </div>
          ))}
        </div>

       <div className="explore-container">
  <p className="explore-more">Explore All Projects…</p>
  <span className="explore-icon">
    <FiExternalLink />
  </span>
</div>

</div>


    </section>
  );
}
