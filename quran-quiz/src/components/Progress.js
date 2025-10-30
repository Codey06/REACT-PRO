// src/components/Progress.js
import React from 'react';

const Progress = ({ surahs, surahsLaXafiday }) => {
  const wadartaAayadaha = surahs.reduce((wadarta, surah) => wadarta + surah.aayado, 0);
  const aayadahaLaXafiday = surahs
    .filter(surah => surahsLaXafiday.includes(surah.id))
    .reduce((wadarta, surah) => wadarta + surah.aayado, 0);
  
  const boqolkiiba = Math.round((aayadahaLaXafiday / wadartaAayadaha) * 100);

  return (
    <div className="progress-section">
      <h2>Hormarka Xifdinta</h2>
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${boqolkiiba}%` }}
          ></div>
        </div>
        <div className="progress-stats">
          <div className="stat-card">
            <span className="stat-number">{aayadahaLaXafiday.toLocaleString()}</span>
            <span className="stat-label">Aayado la Xafiday</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{surahsLaXafiday.length}</span>
            <span className="stat-label">Suuraho la Xafiday</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{boqolkiiba}%</span>
            <span className="stat-label">Wadarta Hormarka</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;