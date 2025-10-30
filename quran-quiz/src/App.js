// src/App.js - UPDATED
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Progress from './components/Progress';
import Controls from './components/Controls';
import SurahTable from './components/SurahTable';
import quranData from './data/quranData';
import './App.css';

const App = () => {
  const [surahs, setSurahs] = useState([]);
  const [surahsLaXafiday, setSurahsLaXafiday] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortConfig, setSortConfig] = useState({ 
    key: 'id', 
    direction: 'ascending' 
  });
  const [theme, setTheme] = useState('light');

  // Initialize data and theme
  useEffect(() => {
    setSurahs(quranData);
    
    // Load memorized surahs from localStorage
    const saved = localStorage.getItem('surahsLaXafiday');
    if (saved) {
      setSurahsLaXafiday(JSON.parse(saved));
    }

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('quranTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('surahsLaXafiday', JSON.stringify(surahsLaXafiday));
  }, [surahsLaXafiday]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('quranTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleXafid = (surahId) => {
    if (surahsLaXafiday.includes(surahId)) {
      setSurahsLaXafiday(surahsLaXafiday.filter(id => id !== surahId));
    } else {
      setSurahsLaXafiday([...surahsLaXafiday, surahId]);
    }
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSurahsFilteredAndSorted = () => {
    let filteredSurahs = surahs;

    if (searchTerm) {
      filteredSurahs = surahs.filter(surah => 
        surah.magaca.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType === 'memorized') {
      filteredSurahs = filteredSurahs.filter(surah => 
        surahsLaXafiday.includes(surah.id)
      );
    } else if (filterType === 'not-memorized') {
      filteredSurahs = filteredSurahs.filter(surah => 
        !surahsLaXafiday.includes(surah.id)
      );
    }

    if (sortConfig.key) {
      filteredSurahs = [...filteredSurahs].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredSurahs;
  };

  const surahsToDisplay = getSurahsFilteredAndSorted();

  return (
    <div className="app" data-theme={theme}>
      <Header 
        currentTheme={theme}
        onThemeToggle={toggleTheme}
      />
      
      <div className="main-content">
        <Progress 
          surahs={surahs} 
          surahsLaXafiday={surahsLaXafiday} 
        />
        
        <Controls 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onResetAll={() => setSurahsLaXafiday([])}
          filterType={filterType}
          onFilterChange={setFilterType}
        />
        
        <SurahTable 
          surahs={surahsToDisplay}
          surahsLaXafiday={surahsLaXafiday}
          onToggleMemorized={toggleXafid}
          sortConfig={sortConfig}
          onSort={handleSort}
        />
      </div>
      
      <footer className="app-footer">
        <p>Qaabka Xifdinta Quran-ka &copy; {new Date().getFullYear()} - U diyaar garow xifdinta Quran-ka</p>
      </footer>
    </div>
  );
};

export default App;