import React from 'react';
import { useGlobalContext } from '../context';
import { FaSearch } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Search = () => {
  const {
    updateFilters,
    handleSubmit,
    theme,
    filters: { title, location, fulltime },
  } = useGlobalContext();
  return (
    <section
      className={`${
        theme === 'light'
          ? 'search-container light-theme'
          : 'search-container dark-theme'
      }`}
    >
      <form className='form-container' onSubmit={(e) => e.preventDefault()}>
        {/* search by name */}
        <div className='form-control'>
          <span className='search-title-icon'>
            <FaSearch />
          </span>
          <input
            type='text'
            name='title'
            value={title}
            placeholder='Filter by title and companies'
            className='title-input'
            onChange={updateFilters}
          />
        </div>
        {/* search by location */}
        <div className='form-control'>
          <span className='search-location-icon'>
            <IoLocationSharp />
          </span>
          <input
            type='text'
            name='location'
            value={location}
            placeholder='Filter by location'
            className='location-input'
            onChange={updateFilters}
          />
        </div>
        {/* check full time */}
        <div className='form-control'>
          <input
            type='checkbox'
            name='fulltime'
            id='fulltime'
            onChange={updateFilters}
            checked={fulltime}
            className='search-checkbox'
          />
          <label className='fulltime-label' htmlFor='fulltime'>
            Full Time Only
          </label>
        </div>
        <button type='submit' className='submit-btn' onClick={handleSubmit}>
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
