import TreatmentPage from '@/app/components/TreatmentPage';
import { treatmentsData } from '../../treatmentsData';

const Aroma = () => (
  <TreatmentPage {...treatmentsData.massage.find((t) => t.id === 'aroma')!} />
);

export default Aroma;
