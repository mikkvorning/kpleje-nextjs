import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const LowerLegsBikini = () => {
  const { title, description, duration, price, image } =
    treatmentsData.wax.lowerLegsBikini;

  return TreatmentPage({ title, description, duration, price, image });
};

export default LowerLegsBikini;
