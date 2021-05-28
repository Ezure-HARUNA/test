import React from 'react'

const Filter = ({ value, onChange }) => {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };
  return (
    <div >
      {/* tab */}
      <a
        href="#"
        onClick={handleClick.bind(null, 'ALL')}
        // className={classNames({ 'is-active': value === 'ALL' })}
      >All</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'engineer')}
        // className={classNames({ 'is-active': value === 'TODO' })}
      >ToDo</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'business')}
        // className={classNames({ 'is-active': value === 'DONE' })}
      >Done</a>
    </div>
  );
}

export default Filter
