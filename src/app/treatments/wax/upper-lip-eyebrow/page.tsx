import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const UpperLipEyebrow = () => (
  <TreatmentPage
    {...treatmentsData.wax.find((t) => t.id === 'upper-lip-eyebrow')!}
  />
);

export default UpperLipEyebrow;
