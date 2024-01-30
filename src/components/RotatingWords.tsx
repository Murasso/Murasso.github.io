// RotatingWords.jsx

import React, { useRef, useEffect } from 'react';
import { init } from 'ityped';

const RotatingWords = () => {
  const textRef = useRef();

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Web Designer", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 3000, // Pause for 3 seconds before backtyping
      loop: true,
    };

    init(textRef.current, options);
  }, []);

  return (
    <div className="rotating-words">
      {`Hi! I'm So `}
      <span ref={textRef}></span>
    </div>
  );
};

export default RotatingWords;
