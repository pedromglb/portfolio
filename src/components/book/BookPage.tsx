import { motion } from 'framer-motion';

interface Props {
  page: 'home' | 'about';
  onNavigate: (page: 'home' | 'about') => void;
}

const BookPage = ({ page, onNavigate }: Props) => {
  return (
    <motion.div
      className="absolute inset-0 bg-neutral-100 rounded-lg shadow-xl p-6"
      initial={{ rotateY: 90 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: -90 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ transformOrigin: 'left' }}
    >
      {page === 'home' && (
        <>
          <h2 className="text-lg font-semibold">Chapter 1</h2>
          <p className="mt-4 text-sm">
            Welcome to my story as a Front-end Developer.
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="mt-6 text-sm underline"
          >
            Next page →
          </button>
        </>
      )}

      {page === 'about' && (
        <>
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="mt-4 text-sm">
            I build modern, accessible and animated web experiences.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="mt-6 text-sm underline"
          >
            ← Previous page
          </button>
        </>
      )}
    </motion.div>
  );
};

export default BookPage;