import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const FullLegsBikini = () => {
  const { title, description, duration, price, image } =
    treatmentsData.wax.fullLegsBikini;

  return TreatmentPage({ title, description, duration, price, image });
};

export default FullLegsBikini;
