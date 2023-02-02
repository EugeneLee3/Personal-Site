import React from 'react';
import Typewriter from '../components/Typewriter';

import "../styles/not_found.css";

export default function NotFound() {
  return (
    <div>
      <div className="error-text">
        <Typewriter titles="PAGE NOT FOUND."/>
      </div>
    </div>
  )
}
