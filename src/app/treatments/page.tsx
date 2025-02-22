import TreatmentCard from '../components/TreatmentCard';
import { treatmentsData } from './treatmentsData';

const treatments = () => {
  const data = [
    ...Object.values(treatmentsData.massage),
    ...Object.values(treatmentsData.wax),
  ];

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl font-bold my-4'>Treatments</h1>
      <h3 className='text-md my-4'>
        Here is a list of all our treatments and services.
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {data.map((treatment, index) => (
          <TreatmentCard
            key={index}
            id={treatment.id}
            title={treatment.title}
            image={treatment.image}
            duration={treatment.duration}
            price={treatment.price}
            description={treatment.description}
            link={treatment.link}
          />
        ))}
      </div>
    </div>
  );
};

export default treatments;
