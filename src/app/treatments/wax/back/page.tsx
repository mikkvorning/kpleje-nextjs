import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const FullBack = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'back')!} />
);

export default FullBack;
