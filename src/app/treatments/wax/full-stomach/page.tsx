import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const FullStomach = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'full-stomach')!} />
);

export default FullStomach;
