import React, { useEffect, useState } from 'react';
import './wpds.css';
import html2pdf from 'html2pdf.js';
import * as lucideIcons from 'lucide';

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

  // Social icons mapping - using locally installed Lucide
  const getSocialIcon = (platform) => {
    const icons = {
      twitter: 'Twitter',
      x: 'Twitter', // Support both Twitter and X
      linkedin: 'Linkedin',
      github: 'Github',
      facebook: 'Facebook',
      instagram: 'Instagram',
      youtube: 'Youtube',
      tiktok: 'Music',
      mastodon: 'Share2',
      dribbble: 'Dribbble',
      behance: 'Figma',
      medium: 'BookOpen',
      dev: 'Code',
      stackoverflow: 'Layers',
      default: 'Link'
    };
    
    // Get the icon name based on platform, with fallback to default
    const iconName = icons[platform.toLowerCase()] || icons.default;
    // Get the icon component from lucide
    const LucideIcon = lucideIcons[iconName];
    
    if (!LucideIcon) return null;
    
    // Different theme styling
    const themeStyles = {
      wds: { stroke: '#2271b1', background: '#f0f0f1' },
      default: { stroke: '#555', background: '#f0f0f1' }
    };
    
    // Use theme from profile, with fallback to default
    const theme = profile.ui || 'default';
    const style = themeStyles[theme] || themeStyles.default;
    
    return (
      <LucideIcon 
        size={20} 
        color={style.stroke}
        strokeWidth={1.5} 
      />
    );
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
              style={{ 
                background: profile.ui === 'wds' ? '#f0f0f1' : '#f0f0f1'
              }}
            >
              {getSocialIcon(item.platform)}
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
