import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const Nose = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'nose')!} />
);

export default Nose;
