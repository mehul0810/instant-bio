import React, { useEffect, useState } from 'react';
import './wpds.css';
import html2pdf from 'html2pdf.js';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('profile.json')
      .then((res) => res.json())
      .then(setProfile);
  }, []);
  
  const downloadAsPDF = () => {
    const element = document.querySelector(".wpds-bio-card");
    const opt = {
      margin: 10,
      filename: `${profile.name}-bio.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };

  if (!profile) return <div className="wpds-loading">Loading...</div>;

  // Social icons mapping - using Lucide CDN
  const getSocialIcon = (platform) => {
    const baseUrl = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/';
    const icons = {
      twitter: 'twitter',
      x: 'twitter', // Support both Twitter and X
      linkedin: 'linkedin',
      github: 'github',
      facebook: 'facebook',
      instagram: 'instagram',
      youtube: 'youtube',
      tiktok: 'music',
      mastodon: 'share-2',
      dribbble: 'dribbble',
      behance: 'figma',
      medium: 'book-open',
      dev: 'code',
      stackoverflow: 'layers',
      default: 'link'
    };
    
    const iconName = icons[platform.toLowerCase()] || icons.default;
    return `${baseUrl}${iconName}.svg`;
  };

  return (
    <div className="wpds-bio-card">
      <img src={profile.photo_url} alt={profile.name} className="wpds-avatar" />
      <h1 className="wpds-title">{profile.name}</h1>
      <p className="wpds-headline">{profile.headline}</p>
      <div
        className="wpds-description"
        dangerouslySetInnerHTML={{ __html: profile.description }}
      />
      
      <div className="wpds-button-group">
        <a className="wpds-btn" href={`mailto:${profile.email}`}>
          {profile.cta?.text || "Contact Me"}
        </a>
        <button className="wpds-btn wpds-btn-secondary" onClick={downloadAsPDF}>
          Download as PDF
        </button>
      </div>
      
      {/* Social Icons Section */}
      {profile.social && profile.social.length > 0 && (
        <div className="wpds-social-icons">
          {profile.social.map((item) => (
            <a 
              key={item.platform} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="wpds-social-icon"
              title={item.platform}
            >
              <img 
                src={getSocialIcon(item.platform)} 
                alt={item.platform} 
                width="24" 
                height="24" 
              />
            </a>
          ))}
        </div>
      )}
      
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
