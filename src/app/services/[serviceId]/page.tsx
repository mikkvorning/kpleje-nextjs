import { useParams } from 'next/navigation';

const ServicePage = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.serviceId} Details</h1>
      <p>This is where you would show details for {params.serviceId}.</p>
    </div>
  );
};

export default ServicePage;
