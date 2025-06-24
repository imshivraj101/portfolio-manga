import './SideQuests.css';
import { FiExternalLink } from 'react-icons/fi';
import tedxLogo from '../assets/orgs/tedx.png';
import innoveraLogo from '../assets/orgs/innovera.png';

const quests = [
  {
    id: 1,
    org: 'TEDx KKWIEER',
    role: 'Design Lead',
    duration: 'Mar 2025 - Present',
    description: 'Led the creative direction and visual identity for TEDx event, from posters to stage design.',
    logo: tedxLogo,
    link: '#',
  },
  {
    id: 2,
    org: 'Innov-Era Hackathon',
    role: 'Organizing Committee',
    duration: 'Jan 2025 - Apr 2025',
    description: 'Helped coordinate a national-level hackathon with 100+ participants.',
    logo: innoveraLogo,
    link: '#',
  },
  {
    id: 3,
    org: 'Maffick 2025',
    role: 'Design Core',
    duration: 'Feb 2025 - Mar 2025',
    description: 'Crafted branding assets, stage banners, and social content for the cultural fest.',
    logo: innoveraLogo,
    link: '#',
  },
];

export default function SideQuests() {
  return (
    <section className="sidequests-section">
      <h2 className="sidequests-title">Side Quests</h2>

      <div className="quests-grid">
        {quests.map((q) => (
          <div className="quest-wrapper" key={q.id}>
            <div className="quest-logo-wrap">
              <img src={q.logo} alt={q.org} className="quest-logo" />
            </div>

            <div className="quest-card">
              <a href={q.link} target="_blank" rel="noreferrer" className="quest-float-icon">
                <FiExternalLink />
              </a>

              <div className="quest-content">
                <div className="quest-header">
                  <h3>{q.org}</h3>
                  <span className="quest-role">{q.role}</span>
                  <p className="quest-duration">{q.duration}</p>
                </div>
                <hr className="quest-divider" />
                <p className="quest-description">{q.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-container">
        <button className="explore-button">
          Explore All Side Quests <FiExternalLink className="explore-icon" />
        </button>
      </div>
    </section>
  );
}
