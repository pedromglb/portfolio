import { motion } from 'framer-motion';

interface Props {
  onOpen: () => void;
}

const BookCover = ({ onOpen }: Props) => {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg"
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: -100 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      style={{ transformOrigin: 'left' }}
      onClick={onOpen}
    >
      <div className="text-center">
        <h1 className="text-xl font-semibold">Your Name</h1>
        <p className="text-sm opacity-70 mt-2">
          Front-end React Developer
        </p>
        <span className="mt-6 block text-xs opacity-50">
          Click to open
        </span>
      </div>
    </motion.div>
  );
};

export default BookCover;