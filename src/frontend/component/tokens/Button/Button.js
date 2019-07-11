import React from 'react';

const Button = (props) => {
    return (
      <button
        className="Button"
        onClick={props.action}>
        {props.description}
      </button>
    )
}

export default Button
