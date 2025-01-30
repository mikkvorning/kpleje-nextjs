import Link from 'next/link';

const treatments = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold my-4'>Treatments</h1>
      <h3 className='text-md  my-4'>
        Here is a list of all our treatments and services.
      </h3>

      <div className='my-8'>
        <ul className='space-y-8'>
          <li>
            <h4 className='text-2xl font-semibold'>Massages</h4>
            <ul className='space-y-2 mt-4'>
              <li>
                <Link
                  href='/treatments/massages/facial'
                  className='text-blue-600 hover:underline italic'
                >
                  Facial massage
                </Link>
              </li>
              <li>
                <Link
                  href='/treatments/massages/full'
                  className='text-blue-600 hover:underline italic'
                >
                  Full body massage
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h4 className='text-2xl font-semibold'>Wax treatments</h4>
            <ul className='space-y-2 mt-4'>
              <li>
                <Link
                  href='/treatments/wax/brazilian'
                  className='text-blue-600 hover:underline italic'
                >
                  Brazilian Wax
                </Link>
              </li>
              <li>
                <Link
                  href='/treatments/wax/back'
                  className='text-blue-600 hover:underline italic'
                >
                  Back Wax
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default treatments;
