import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const LowerLegs = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'lowerLegs')!} />
);

export default LowerLegs;
