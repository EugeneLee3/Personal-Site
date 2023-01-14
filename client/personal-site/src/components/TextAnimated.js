import React from 'react';
import AnimatedText from 'react-animated-text-content';

function TextAnimated({ letter }) {
  return (
    <div>
        <AnimatedText 
            type="words"
            animationType='lights'
            duration={2.0}
            interval={0.06}
            animation={{
              scale: 1.1,
              ease: 'linear',
            }}
          >
            { letter }
          </AnimatedText>
    </div>
  )
}

export default TextAnimated