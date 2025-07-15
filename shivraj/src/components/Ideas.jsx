import './Ideas.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Ideas({ onlyRecent = false }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        console.error('Supabase Error:', error.message);
      } else {
        setProjects(onlyRecent ? data.slice(0, 2) : data);
      }
    }

    fetchProjects();
  }, [onlyRecent]);

  return (
    <section className="ideas-section">
      <div className="ideas-overlay">
        <h2 className="ideas-title">Ideas</h2>

        <div className="ideas-grid">
          {projects.map((project) => (
            <div className="idea-card" key={project.id}>
              {/* External links */}
              <a
                href={project.deploy}
                target="_blank"
                rel="noreferrer"
                className="idea-float-icon"
              >
                <FiExternalLink />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="idea-float-icon"
                style={{ right: '52px', background: 'white', color: '#333' }}
              >
                <FiGithub />
              </a>

              {/* Thumbnail */}
              <img
                src={`/assets/${project.thumbnail}.png`}
                onError={(e) => {
                  e.target.src = '/assets/default.png';
                }}
                alt={project.project_name}
                className="idea-thumbnail"
              />

              {/* Text details */}
              <div className="idea-details">
                <h3>{project.project_name}</h3>
                <p className="idea-role">Role: {project.role}</p>
                <hr className="idea-divider" />
                <p className="idea-desc">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore more */}
        <div className="explore-container">
          <p className="explore-more">Explore All Projects…</p>
          <Link to="/ideas" className="explore-icon">
            <FiExternalLink />
          </Link>
        </div>
      </div>
    </section>
  );
}
