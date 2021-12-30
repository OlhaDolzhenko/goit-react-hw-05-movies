import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <div>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={search}
          onChange={handleChange}
          placeholder="Search movies"
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
