import React from 'react';
import './App.css';
import Button from './Button';

const btns = [
  'AC',
  '(',
  ')',
  '/',
  7,
  8,
  9,
  '*',
  4,
  5,
  6,
  '-',
  1,
  2,
  3,
  '+',
  0,
  '00',
  '.',
  '=',
];

const App = () => {
  const [digit, setDigit] = React.useState(0);

  function handleClick({ target }) {
    const tecla = target.innerText;
    if (tecla === 'AC') {
      setDigit('');
    } else if (digit === 0) {
      setDigit(tecla);
    } else if (tecla === '=') {
      setDigit(eval(digit));
    } else {
      setDigit(digit + tecla);
    }
  }

  return (
    <section className="calculator">
      <div className="display">{digit}</div>
      <div className="buttons">
        <Button onclick={handleClick} btns={btns} />
      </div>
    </section>
  );
};

export default App;
