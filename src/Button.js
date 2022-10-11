import React from 'react';

const Button = ({ btns, onclick }) => {
  return (
    <>
      {btns.map((btn) => (
        <button className="button" onClick={onclick} key={btn}>
          {btn}
        </button>
      ))}
    </>
  );
};

export default Button;
