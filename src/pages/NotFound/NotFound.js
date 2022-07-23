import { motion } from 'framer-motion';
export default function NotFound() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0, transition:{duration:0.3}}}
  >
      <h1>
        404 Page not found <br />:(  Please login  {' '}
      </h1>
  </motion.div>
  );
};
