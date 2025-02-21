// app/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className='bg-black bg-opacity-50 text-white p-4 shadow-md'>
        <nav className='container mx-auto flex justify-between items-center'>
          <Link
            href='/'
            className='text-2xl font-bold font-mr-bedfort'
            style={{ fontFamily: 'Mr Bedfort, cursive' }}
          >
            Beauty & Wellness Clinic
          </Link>
          <ul className='flex space-x-4'>
            <li>
              <Link href='/about' className='hover:underline'>
                About
              </Link>
            </li>
            <li>
              <Link href='/treatments' className='hover:underline'>
                Treatments
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
