import React, { useState } from 'react';
import Search from './search';

const App = () => {
  const array = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
  ];

  const [filteredArray, setFilteredArray] = useState(array);

  const handleSearch = (min, max) => {
    const result = array.filter(obj => {
      const isGreaterThanMin = min === null || obj.value >= min;
      const isLessThanMax = max === null || obj.value <= max;
      return isGreaterThanMin && isLessThanMax;
    });
    setFilteredArray(result);
  };


  return (
    <div>
      <h1>Search in Object Array</h1>
      <Search onSearch={handleSearch} />
      <h2>Results:</h2>
      <ul>
        {filteredArray.map((obj) => (
          <li key={obj.id}>ID: {obj.id}, Value: {obj.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;