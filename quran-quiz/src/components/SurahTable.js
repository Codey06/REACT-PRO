// src/components/SurahTable.js - FIXED IMPORT
import React, { useState } from 'react';
import QuranPopup from './QuranPopup'; // MAKE SURE THIS IMPORT IS CORRECT

const SurahTable = ({ 
  surahs, 
  surahsLaXafiday, 
  onToggleMemorized, 
  sortConfig, 
  onSort 
}) => {
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? '↑' : '↓';
    }
    return '';
  };

  const handleSurahClick = (surah) => {
    setSelectedSurah(surah);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedSurah(null);
  };

  return (
    <div className="table-section">
      <h2>Liiska Suurahyada Quran-ka</h2>
      <div className="table-container">
        <table className="surah-table">
          <thead>
            <tr className="header-row">
              <th onClick={() => onSort('id')}>
                Lambarka {getSortIndicator('id')}
              </th>
              <th onClick={() => onSort('magaca')}>
                Magaca Suurada {getSortIndicator('magaca')}
              </th>
              <th onClick={() => onSort('aayado')}>
                Aayadaha {getSortIndicator('aayado')}
              </th>
              <th onClick={() => onSort('bogga')}>
                Bogga {getSortIndicator('bogga')}
              </th>
              <th onClick={() => onSort('juz')}>
                Juz {getSortIndicator('juz')}
              </th>
              <th>Xifid</th>
            </tr>
          </thead>
          <tbody>
            {surahs.map(surah => (
              <tr 
                key={surah.id} 
                className={surahsLaXafiday.includes(surah.id) ? 'xafiday' : ''}
              >
                <td>{surah.id}</td>
                <td 
                  className="surah-name clickable"
                  onClick={() => handleSurahClick(surah)}
                >
                  {surah.magaca}
                </td>
                <td>{surah.aayado.toLocaleString()}</td>
                <td>{surah.bogga}</td>
                <td>{surah.juz}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={surahsLaXafiday.includes(surah.id)}
                    onChange={() => onToggleMemorized(surah.id)}
                    className="memorized-checkbox"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {surahs.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>Wax Suuraho ah lama helin</h3>
            <p>Isku day inaad bedesho ereyga raadinta ama filter-ka</p>
          </div>
        )}
      </div>

      <QuranPopup 
        surah={selectedSurah}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default SurahTable;