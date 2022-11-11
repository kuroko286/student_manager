import React from 'react'
import { Link } from 'react-router-dom';

function Button({label,linkTo}) {
  return (
    <button className="button glass">
        <Link to={linkTo} className="link">
          {label}
        </Link>
      </button>
  )
}

export default Button;