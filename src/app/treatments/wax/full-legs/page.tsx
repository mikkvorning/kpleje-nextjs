import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const FullLegs = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'fullLegs')!} />
);

export default FullLegs;
