import './SideQuests.css';
import tedxLogo from '../assets/orgs/tedx.png';
import innoveraLogo from '../assets/orgs/innovera.png';


const quests = [
  {
    id: 1,
    org: 'TEDx KKWIEER',
    role: 'Design Lead',
    duration: 'Mar 2025 - Present',
    description:
      'Led the creative direction and visual identity for TEDx event, from posters to stage design.',
    logo: tedxLogo,
  },
  {
    id: 2,
    org: 'Innov-Era Hackathon',
    role: 'Organizing Committee',
    duration: 'Jan 2025 - Apr 2025',
    description:
      'Helped coordinate a national-level hackathon with 100+ participants, ensuring smooth logistics.',
    logo: innoveraLogo,
  },
 
];

export default function SideQuests() {
  return (
    <section className="sidequests-section">
      <h2 className="sidequests-title">Side Quests</h2>

      <div className="quests-grid">
        {quests.map((q) => (
          <div className="quest-card" key={q.id}>
            <img src={q.logo} alt={q.org} className="quest-logo" />
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
        ))}
      </div>
    </section>
  );
}
