import { treatmentsData } from '../../treatmentsData';

const FullBody = () => {
  const { title, description } = treatmentsData.massage.full;
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>{title}</h1>
      <p className='mb-4'>Varighed: 90 min</p>
      <p className='mb-4'>Pris: 499,- DKK</p>
      <p>{description}</p>
    </div>
  );
};

export default FullBody;
