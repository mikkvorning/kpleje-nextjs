// app/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-blue-600 text-white p-4'>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          Beauty & Wellness Clinic
        </Link>
        <ul className='flex space-x-4'>
          <li>
            <Link href='/about' className='hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link href='/services' className='hover:underline'>
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
