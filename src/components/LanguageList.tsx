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
  faLinux,
  faDocker,
  faSquareGit,
  faSquareGithub,

} from '@fortawesome/free-brands-svg-icons';

const languages = [
  { name: 'Python', icon: faPython },
  { name: 'Django', icon: faPython },
  { name: 'PHP', icon: faPhp },
  { name: 'Laravel', icon: faLaravel },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3 },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Vue', icon: faVuejs },
  { name: 'Linux', icon: faLinux },
  { name: 'Docker', icon: faDocker },
  { name: 'Git', icon: faSquareGit },
  { name: 'Github', icon: faSquareGithub },
];

const listVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const LanguageList = () => {
  return (
    <motion.div variants={listVariants} initial="hidden" animate="visible" className="flex justify-center">
      <ul className="flex flex-wrap space-x-8 space-y-4 w-2/3">
        {languages.map((language, index) => (
          <motion.li key={index} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} className="mb-2 sm:mb-0">
            <FontAwesomeIcon icon={language.icon} className="text-blue text-6xl" /> {language.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default LanguageList;
