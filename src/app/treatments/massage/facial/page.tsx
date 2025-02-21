import { treatmentsData } from '../../treatmentsData';

const Facial = () => {
  const { title, description } = treatmentsData.massage.facial;
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>{title}</h1>
      <p className='mb-4'>Varighed: 60 min</p>
      <p className='mb-4'>Pris: 299,- DKK</p>
      <p>{description}</p>
    </div>
  );
};

export default Facial;
