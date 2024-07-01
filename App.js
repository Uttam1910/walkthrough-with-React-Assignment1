import React from 'react';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Header title="Welcome to My App" />
      <Person name="John" age={30} />
      <Button text="Click Me" onClick={handleClick} />
      <List items={items} />
    </div>
  );
}

export default App;
