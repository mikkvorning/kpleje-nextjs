import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const UpperLipChin = () => (
  <TreatmentPage
    {...treatmentsData.wax.find((t) => t.id === 'upper-lip-chin')!}
  />
);

export default UpperLipChin;
