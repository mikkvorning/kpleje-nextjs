import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const BikiniLine = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'bikini-line')!} />
);

export default BikiniLine;
