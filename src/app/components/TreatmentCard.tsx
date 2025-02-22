import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Treatment } from '../treatments/treatmentsData';

const TreatmentCard: React.FC<Treatment> = ({
  title,
  image,
  duration,
  price,
  description,
  link,
}) => {
  return (
    <Link href={link} legacyBehavior>
      <a className='border rounded-lg shadow-md p-4 flex flex-col tramnsition duration-100 ease-in-out transform hover:scale-105 hover:shadow-xl'>
        {image && image !== '' ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className='w-full h-48 object-cover rounded-t-lg'
          />
        ) : (
          <div className='w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center'>
            <span className='text-gray-500 flex items-center justify-center'>
              No Image Available
            </span>
          </div>
        )}
        <div className='p-4 flex flex-col flex-grow max-h-[300px] overflow-hidden'>
          <h2 className='text-md font-bold mb-2'>{title}</h2>
          <div className='flex gap-2'>
            <p className='mb-2'>{duration}</p>
            <p className='font-semibold mb-2'>{price}</p>
          </div>

          <p className='line-clamp-[3] overflow-hidden text-ellipsis'>
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default TreatmentCard;
