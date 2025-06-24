export default function FeaturedIdeas({ ideas = [] }) {
  return (
    <section className="ideas-section">
      <h2 className="ideas-title">Featured Ideas</h2>

      {ideas.length === 0 ? (
        <p>No featured ideas to show right now.</p>
      ) : (
        ideas.map((idea) => (
          <div className="idea-card" key={idea._id}>
            <img src={idea.imageUrl} alt={idea.title} className="idea-img" />
            <div className="idea-content">
              <div className="idea-header">
                <h3>{idea.title}</h3>
                <span className="icon-link">↗</span>
              </div>
              <p className="idea-role">Role: {idea.role}</p>
              <p className="idea-desc">{idea.description}</p>
            </div>
          </div>
        ))
      )}

      <p className="explore-more">Explore All Projects… ↗</p>
    </section>
  );
}
