// RotatingWords.jsx

import React, { useState, useEffect } from 'react';
import './RotatingWords.css';

const RotatingWords = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100); // Faster typing
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(300); // Faster backspacing
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      
      setDelta(500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100); // Faster typing
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <span className="rounded-sm z-[100] font-semibold rotating-words">
      {`Hi! I'm So `}
      <span className="rounded-sm font-semibold txt-rotate white-text" data-period="1000" data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'>
        <span className="wrap">{text}</span>
        <span className="cursor-line"></span>
      </span>
    </span>
  );
};

export default RotatingWords;
