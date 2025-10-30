// src/components/Controls.js
import React from 'react';

const Controls = ({ 
  searchTerm, 
  onSearchChange, 
  onResetAll, 
  filterType, 
  onFilterChange 
}) => {
  return (
    <div className="controls-section">
      <div className="controls">
        <div className="control-group">
          <label className="control-label">Raadi Suuraha</label>
          <input
            type="text"
            placeholder="Geli magaca suurada..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="control-group">
          <label className="control-label">Filter By</label>
          <select 
            value={filterType} 
            onChange={(e) => onFilterChange(e.target.value)}
            className="filter-select"
          >
            <option value="all">Dhammaan Suuraha</option>
            <option value="memorized">Kuwa la Xafiday</option>
            <option value="not-memorized">Kuwa aan la Xafidin</option>
          </select>
        </div>
        
        <div className="control-group">
          <label className="control-label">&nbsp;</label>
          <button 
            className="reset-btn"
            onClick={onResetAll}
          >
            Dib u Bilow Dhammaan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;