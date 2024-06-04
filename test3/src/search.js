import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const handleSearch = () => {
    if (onSearch) {
        onSearch(minValue === '' ? null : Number(minValue), maxValue === '' ? null : Number(maxValue));
    
    }
  };

  return (
    <div>
      <label>
        Min Value:
        <input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
      </label>
      <br />
      <label>
        Max Value:
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;