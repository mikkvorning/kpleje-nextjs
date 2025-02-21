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
      <a className='border rounded-lg shadow-md p-4 flex flex-col h-full'>
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
            <span className='text-gray-500'>No Image Available</span>
          </div>
        )}
        <div className='p-4 flex flex-col flex-grow'>
          <h2 className='text-xl font-bold mb-2'>{title}</h2>
          <p className='text-gray-600 mb-2'>{duration}</p>
          <p className='text-gray-800 font-semibold mb-2'>{price}</p>
          <p className='text-gray-600'>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default TreatmentCard;
