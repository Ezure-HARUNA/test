import React from 'react'

const TodoItem = ({ item, onCheck }) => {
  const handleChange = () => {
    onCheck(item);
  };
  return (
    <label >
      <input
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem
