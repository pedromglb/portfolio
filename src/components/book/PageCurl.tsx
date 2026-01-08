import { motion } from 'framer-motion';

interface PageCurlProps {
  isTurning: boolean;
}

const PageCurl = ({ isTurning }: PageCurlProps) => {
  return (
    <motion.div
      className="pointer-events-none absolute top-0 right-0 h-full w-8"
      initial={false}
      animate={{
        opacity: isTurning ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      style={{
        background:
          'linear-gradient(to left, rgba(0,0,0,0.25), rgba(0,0,0,0))',
      }}
    />
  );
};

export default PageCurl;