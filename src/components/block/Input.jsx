import React from 'react';

const Input = ({ onAdd }) => {
    const [text, setText] = React.useState('');
  
    const handleChange = e => setText(e.target.value);
  
    const handleKeyDown = e => {
      if (e.key === 'Enter') {
        onAdd(text);
        setText('');
      }
    };
  
    return (
      <div className="panel-block">
        <input
          class="input"
          type="text"
          placeholder="Enter to add"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }

  export default Input;