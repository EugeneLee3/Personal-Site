import React from 'react'
import { useEffect, useState  } from 'react';
import { motion } from 'framer-motion';

import '../styles/cursor.css'

function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      })
    
      const [cursorVariant, setCursorVariant] = useState("default")
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x - window.innerHeight*0.013,
          y: mousePosition.y - window.innerHeight*0.013
        }
      }
    

  return (
    <div>
        <motion.div 
            className = "cursor"
            variants = {variants}
            animate = {cursorVariant}
            transition = {{
                x: { duration: 0 },
                y: { duration: 0 }
            }}
            exit={{ opacity: 0 }}
        />
    </div>
  )
}

export default Cursor