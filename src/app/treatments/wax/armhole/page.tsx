import { treatmentsData } from '../../treatmentsData';

const Armhole = () => {
  const { title, description } = treatmentsData.wax.armhole;
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>{title}</h1>
      <p className='mb-4'>Varighed: 30 min</p>
      <p className='mb-4'>Pris: 159,- DKK</p>
      <p>{description}</p>
    </div>
  );
};

export default Armhole;
