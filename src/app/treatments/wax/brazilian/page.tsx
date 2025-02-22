import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const Brazilian = () => (
  <TreatmentPage {...treatmentsData.wax.find((t) => t.id === 'brazilian')!} />
);

export default Brazilian;
