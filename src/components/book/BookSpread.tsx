import { motion } from 'framer-motion';
import PageCurl from './PageCurl';
import { useState } from 'react';

interface Props {
  pageIndex: number;
  next: () => void;
  prev: () => void;
}

const BookSpread = ({ pageIndex, next, prev }: Props) => {

    const [isTurning, setIsTurning] = useState(false);

  return (
    <div className="absolute inset-0 flex">
      {/* Página esquerda */}
      <div className="w-1/2 bg-neutral-100 rounded-l-lg p-4 shadow-inner">
        <h2 className="text-sm font-semibold">Chapter {pageIndex}</h2>
      </div>

      {/* Página direita animada */}
      <motion.div
        className="relative w-1/2 bg-neutral-50 rounded-r-lg p-4 shadow-xl"
        initial={{ rotateY: -180 }}
        animate={{ rotateY: 0 }}
        exit={{ rotateY: 180 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        style={{
          transformOrigin: 'left',
          transformStyle: 'preserve-3d',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 12px 0px 24px',
        }}
      >
        <p className="text-sm">
          This is part of my story as a Front-end Developer.
        </p>

        <button onClick={() => { setIsTurning(true); setTimeout(() => { setIsTurning(false); next(); }, 600); }}
            className="mt-6 text-xs underline">
                 Next →
        </button>
        <PageCurl isTurning={isTurning} />
      </motion.div>
    </div>
  );
};

export default BookSpread;