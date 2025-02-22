import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const UpperLip = () => {
  const { title, description, duration, price, image } =
    treatmentsData.wax.upperLip;

  return TreatmentPage({ title, description, duration, price, image });
};

export default UpperLip;
