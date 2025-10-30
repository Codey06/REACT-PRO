import React from 'react';

const Header = ({ currentTheme, onThemeToggle }) => {
  return (
    <header className="app-header">
      <div className="theme-toggle-container">
        <button 
          className="theme-toggle-btn"
          onClick={onThemeToggle}
        >
          {currentTheme === 'light' ? '🌙' : '☀️'}
          {currentTheme === 'light' ? ' Habka Habeenka' : ' Habka Maalinta'}
        </button>
      </div>
      
      <h1>Qaabka Xifdinta Quran-ka</h1>
      <p>Khabiir ku samee xifdinta Quran-ka oo hel hormarkaaga</p>
    </header>
  );
};

export default Header;