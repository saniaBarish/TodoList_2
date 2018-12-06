import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({onChangeSearch}) => {
  return (
    <input type="text"
      className="form-control search-input"
      placeholder="type to search" 
      onChange={(e) => onChangeSearch(e.target.value.toLowerCase())}/>
  );
};

export default SearchPanel;