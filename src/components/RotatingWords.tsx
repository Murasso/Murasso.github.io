// RotatingWords.jsx

import React, { useState, useEffect } from 'react';
import './RotatingWords.css';

const RotatingWords = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "AI Engineer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100); // Faster backspacing
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(200); // Faster typing
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <span className="rounded-sm font-semibold rotating-words">
      {`Hi! I'm So `}
      <span className="rounded-sm font-semibold txt-rotate white-text" data-period="1000" data-rotate={JSON.stringify(toRotate)}>
        <span className="wrap">{text}</span>
        <span className="cursor-line"></span>
      </span>
    </span>
  );
};

export default RotatingWords;
