import React, { useEffect, useState } from 'react';
import './wpds.css';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('profile.json')
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return <div className="wpds-loading">Loading...</div>;

  return (
    <div className="wpds-bio-card">
      <img src={profile.photo_url} alt={profile.name} className="wpds-avatar" />
      <h1 className="wpds-title">{profile.name}</h1>
      <p className="wpds-headline">{profile.headline}</p>
      <div
        className="wpds-description"
        dangerouslySetInnerHTML={{ __html: profile.description }}
      />
      <a className="wpds-btn" href={`mailto:${profile.email}`}>
        {profile.cta?.text || "Contact Me"}
      </a>
      {profile.links && profile.links.length > 0 && (
        <div className="wpds-links">
          {profile.links.map((section) => (
            <div key={section.category} className="wpds-link-section">
              <div className="wpds-link-category">{section.category}</div>
              <ul>
                {section.items.map((item) => (
                  <li key={item.url}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
