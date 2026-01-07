import Book from '../components/book/Book';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-neutral-800 to-black">
        <Book />
    </div>
  );
};

export default Home;