import Image from 'next/image';
import { Treatment } from '../treatments/treatmentsData';

const TreatmentPage: React.FC<Treatment> = ({
  title,
  description,
  duration,
  price,
  image,
}) => {
  return (
    <div className='container mx-auto p-4'>
      {image && image !== '' ? (
        <Image
          src={image}
          alt={title}
          className='mb-4'
          width={500}
          height={300}
        />
      ) : (
        <div className='mb-4 h-64 bg-gray-300 flex items-center justify-center'>
          <span className='flex items-center justify-center h-full'>
            Billede mangler
          </span>
        </div>
      )}
      <h1 className='text-3xl font-bold mb-4'>{title}</h1>
      <p className='mb-4'>Varighed: {duration}</p>
      <p className='mb-4'>Pris: {price}</p>
      <p>{description}</p>
    </div>
  );
};

export default TreatmentPage;
