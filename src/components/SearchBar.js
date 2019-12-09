import React from 'react';

const SearchBar = ({ onChange, onSearchSubmit }) => {
  console.log()
  return (
      <div className="ui segment">
          <form onSubmit={( state) => onSearchSubmit( state)}>
          <div className="field">
        <label>Image Search</label>
        <input type="text" onChange={onChange} />
      </div>
          </form>
   
    </div>
  );
};

export default SearchBar;
