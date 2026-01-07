import { useState } from 'react';
import BookCover from './BookCover';
import BookSpread from './BookSpread';
import Spine from './Spine';

<Spine />
const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div
      className="relative w-[360px] h-[460px]"
      style={{ perspective: '1400px' }}
    >
      <div className="relative w-full h-full [transform-style:preserve-3d]">
        {!isOpen ? (
          <BookCover onOpen={() => setIsOpen(true)} />
        ) : (
          <BookSpread
            pageIndex={pageIndex}
            next={() => setPageIndex((p) => p + 1)}
            prev={() => setPageIndex((p) => Math.max(p - 1, 0))}
          />
        )}
      </div>
    </div>
  );
};

export default Book;