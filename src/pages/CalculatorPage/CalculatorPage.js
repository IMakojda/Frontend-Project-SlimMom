import {motion} from 'framer-motion';

export default function DiaryPage() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth,  transition:{duration: 0.1}}}
    >
    <h1>Calculator Page</h1>
    </motion.div>
  );
}
