import React from 'react'

import TypeWriter from 'typewriter-effect'

function Typewriter({ titles }) {
  return (
    <div>

        <TypeWriter
        options={{
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            pauseFor: 2500,
            strings: titles
        }} 
        />

    </div>
  )
}

export default Typewriter