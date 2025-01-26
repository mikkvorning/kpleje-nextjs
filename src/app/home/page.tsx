import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Clinic</h1>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/services'>Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
