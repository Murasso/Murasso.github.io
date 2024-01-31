// LanguageList.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faVuejs,
  faPhp,
  faNodeJs,
  faLaravel,
} from '@fortawesome/free-brands-svg-icons';

const languages = [
  { name: 'Python', icon: faPython },
  { name: 'PHP', icon: faPhp },
  { name: 'Django', icon: faPython },
  { name: 'Laravel', icon: faLaravel },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3 },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Vite', icon: faNodeJs }, // Assuming Vite uses Node.js
  { name: 'Vue', icon: faVuejs }
];

const listVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const LanguageList = () => {
  return (
    <motion.div variants={listVariants} initial="hidden" animate="visible" className="flex items-center">
      <ul className="flex flex-wrap space-x-4">
        {languages.map((language, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-2 sm:mb-0">
            <FontAwesomeIcon icon={language.icon} className="text-blue" /> {language.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LanguageList;
